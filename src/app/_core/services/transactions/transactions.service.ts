import { Injectable } from '@angular/core';
import { DecodedIndexedTx, SearchTxFilter, SearchTxQuery } from 'decentr-js';
import { forkJoin, Observable, of, timer } from 'rxjs';
import { distinctUntilChanged, map, mergeMap, pluck, retry, scan, switchMap, tap, throttleTime } from 'rxjs/operators';

import { ONE_SECOND } from '@shared/utils/date';
import { whileDocumentVisible } from '@shared/utils/document';
import { TransactionsApiService } from './transactions-api.service';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  private readonly transactionsCache: Map<DecodedIndexedTx['hash'], DecodedIndexedTx> = new Map();
  private readonly transactionsPageCache: Map<number, DecodedIndexedTx> = new Map();

  constructor(
    private transactionsApiService: TransactionsApiService,
  ) {
  }

  public getTransactionByHash(hash: DecodedIndexedTx['hash']): Observable<DecodedIndexedTx> {
    const cachedTransaction = this.transactionsCache.get(hash);

    return cachedTransaction
      ? of(cachedTransaction)
      : this.transactionsApiService.getTransactionByHash(hash).pipe(
        tap((transaction) => {
          this.transactionsCache.set(transaction.hash, transaction);
        }),
      );
  }

  public searchTransactions(searchParams: SearchTxQuery, filter?: SearchTxFilter): Observable<DecodedIndexedTx[]> {
    return this.transactionsApiService.searchTransactions(searchParams, filter).pipe(
      retry(),
    );
  }

  public getTransactionsLive(count: number, updatePeriod: number): Observable<DecodedIndexedTx[]> {
    return timer(0, ONE_SECOND).pipe(
      whileDocumentVisible(),
      throttleTime(updatePeriod),
      switchMap(() => this.searchTransactions({ height: 100 })),
      // { limit: 1, txMinHeight: 0 }
      // TODO: implement with offchain
      // map((response) => +response.page_total),
      map((response) => 2),
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

  private getLatestTransactions(count: number, totalCount: number): Observable<DecodedIndexedTx[]> {
    return forkJoin(new Array(Math.min(count, totalCount))
      .fill(null)
      .map((_, index) => this.getTransactionByPage(totalCount - index)),
    );
  }

  private getTransactionByPage(page: number): Observable<DecodedIndexedTx> {
    const cachedTransaction = this.transactionsPageCache.get(page);

    // TODO: implement with offchain
    return cachedTransaction
      ? of(cachedTransaction)
      : this.searchTransactions({
        height: 100,
        // page,
        // limit: 1,
        // txMinHeight: 0,
      }).pipe(
        tap(console.log),
        // pluck('tx', 0),
        tap((transaction) => {
          this.transactionsPageCache.set(page, transaction);
          this.transactionsCache.set(transaction.hash, transaction);
        }),
      );
  }
}
