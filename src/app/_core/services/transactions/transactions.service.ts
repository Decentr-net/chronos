import { Injectable } from '@angular/core';
import { Transaction, TXsSearchParameters, TXsSearchResponse } from 'decentr-js';
import { forkJoin, Observable, timer } from 'rxjs';
import { distinctUntilChanged, map, mergeMap, scan, switchMap, throttleTime } from 'rxjs/operators';

import { ONE_SECOND } from '@shared/utils/date';
import { whileDocumentVisible } from '@shared/utils/document';
import { getGreatestCommonDivisor } from '@shared/utils/number';
import { TransactionsApiService } from './transactions-api.service';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  constructor(
    private transactionsApiService: TransactionsApiService,
  ) {
  }

  public getTransactionByHash(hash: Transaction['txhash']): Observable<Transaction> {
    return this.transactionsApiService.getTransactionByHash(hash);
  }

  public searchTransactions(searchParams: TXsSearchParameters): Observable<TXsSearchResponse> {
    return this.transactionsApiService.searchTransactions(searchParams);
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
    const txsCountToRequest = getGreatestCommonDivisor(count, totalCount);
    const pages = totalCount / txsCountToRequest;
    const requestsCount = count / txsCountToRequest;

    const requests = new Array(requestsCount)
      .fill(null)
      .map((_, index) => this.searchTransactions({
        limit: txsCountToRequest,
        page: pages - index,
        txMinHeight: 0,
      }));

    return forkJoin(requests).pipe(
      map((responses) => {
        return responses.reduce((acc, response) => [...acc, ...response.txs], []);
      }),
    );
  }
}
