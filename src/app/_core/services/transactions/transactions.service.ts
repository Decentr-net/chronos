import { Injectable } from '@angular/core';
import { Transaction, TXsSearchParameters, TXsSearchResponse } from 'decentr-js';
import { forkJoin, Observable, of, timer } from 'rxjs';
import { distinctUntilChanged, map, mergeMap, pluck, retry, scan, switchMap, tap, throttleTime } from 'rxjs/operators';

import { ONE_SECOND } from '@shared/utils/date';
import { whileDocumentVisible } from '@shared/utils/document';
import { TransactionsApiService } from './transactions-api.service';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  private readonly transactionsCache: Map<Transaction['txhash'], Transaction> = new Map();
  private readonly transactionsPageCache: Map<number, Transaction> = new Map();

  constructor(
    private transactionsApiService: TransactionsApiService,
  ) {
  }

  public getTransactionByHash(hash: Transaction['txhash']): Observable<Transaction> {
    const cachedTransaction = this.transactionsCache.get(hash);

    return cachedTransaction
      ? of(cachedTransaction)
      : this.transactionsApiService.getTransactionByHash(hash).pipe(
        tap((transaction) => {
          this.transactionsCache.set(transaction.txhash, transaction);
        }),
      );
  }

  public searchTransactions(searchParams: TXsSearchParameters): Observable<TXsSearchResponse> {
    return this.transactionsApiService.searchTransactions(searchParams).pipe(
      retry(),
    );
  }

  public getTransactionsLive(count: number, updatePeriod: number): Observable<Transaction[]> {
    return timer(0, ONE_SECOND).pipe(
      whileDocumentVisible(),
      throttleTime(updatePeriod),
      switchMap(() => this.searchTransactions({ limit: 1, txMinHeight: 0 })),
      map((response) => +response.page_total),
      distinctUntilChanged(),
      scan((acc, totalCount) => ({
        totalCount,
        newCount: Math.min((totalCount - (acc.totalCount || totalCount)) || count, count),
      }), { newCount: 0, totalCount: 0 }),
      mergeMap((updateInfo) => this.getLatestTransactions(updateInfo.newCount, updateInfo.totalCount)),
      scan((acc, newTransactions) => [...newTransactions, ...acc].slice(0, count), []),
      map((transactions) => transactions.sort((left, right) => +right.height - +left.height)),
    );
  }

  private getLatestTransactions(count: number, totalCount: number): Observable<Transaction[]> {
    return forkJoin(new Array(Math.min(count, totalCount))
      .fill(null)
      .map((_, index) => this.getTransactionByPage(totalCount - index)),
    );
  }

  private getTransactionByPage(page: number): Observable<Transaction> {
    const cachedTransaction = this.transactionsPageCache.get(page);

    return cachedTransaction
      ? of(cachedTransaction)
      : this.searchTransactions({
        page,
        limit: 1,
        txMinHeight: 0,
      }).pipe(
        pluck('txs', 0),
        tap((transaction) => {
          this.transactionsPageCache.set(page, transaction);
          this.transactionsCache.set(transaction.txhash, transaction);
        }),
      );
  }
}
