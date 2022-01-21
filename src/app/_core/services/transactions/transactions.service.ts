import { Injectable } from '@angular/core';
import { DecodedIndexedTx, SearchTxFilter, SearchTxQuery } from 'decentr-js';
import { Observable, of } from 'rxjs';
import { retry, tap } from 'rxjs/operators';

import { TransactionsApiService } from './transactions-api.service';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  private readonly transactionsCache: Map<DecodedIndexedTx['hash'], DecodedIndexedTx> = new Map();
  // TODO: implement with offchain
  // private readonly transactionsPageCache: Map<number, DecodedIndexedTx> = new Map();

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

  // TODO: implement with offchain
  // public getTransactionsLive(count: number, updatePeriod: number): Observable<DecodedIndexedTx[]> {
  //   return timer(0, ONE_SECOND).pipe(
  //     whileDocumentVisible(),
  //     throttleTime(updatePeriod),
  //     switchMap(() => this.searchTransactions({ height: 100 })),
  //     // { limit: 1, txMinHeight: 0 }
  //     // map((response) => +response.page_total),
  //     map((response) => 2),
  //     distinctUntilChanged(),
  //     scan((acc, totalCount) => ({
  //       totalCount,
  //       newCount: Math.min((totalCount - (acc.totalCount || totalCount)) || count, count),
  //     }), { newCount: 0, totalCount: 0 }),
  //     mergeMap((updateInfo) => this.getLatestTransactions(updateInfo.newCount, updateInfo.totalCount)),
  //     scan((acc, newTransactions) => [...newTransactions, ...acc].slice(0, count), []),
  //     map((transactions) => transactions.sort((left, right) => +right.height - +left.height)),
  //   );
  // }

  // TODO: implement with offchain
  // private getLatestTransactions(count: number, totalCount: number): Observable<DecodedIndexedTx[]> {
  //   return forkJoin(new Array(Math.min(count, totalCount))
  //     .fill(null)
  //     .map((_, index) => this.getTransactionByPage(totalCount - index)),
  //   );
  // }

  // TODO: implement with offchain
  // private getTransactionByPage(page: number): Observable<DecodedIndexedTx> {
  //   const cachedTransaction = this.transactionsPageCache.get(page);
  //
  //   return cachedTransaction
  //     ? of(cachedTransaction)
  //     : this.searchTransactions({
  //       height: 100,
  //       // page,
  //       // limit: 1,
  //       // txMinHeight: 0,
  //     }).pipe(
  //       tap(console.log),
  //       // pluck('tx', 0),
  //       tap((transaction) => {
  //         this.transactionsPageCache.set(page, transaction);
  //         this.transactionsCache.set(transaction.hash, transaction);
  //       }),
  //     );
  // }
}
