import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { mergeMap, switchMap, take } from 'rxjs/operators';
import { DecentrTxClient, DecodedIndexedTx, IndexedTx, SearchTxFilter, SearchTxQuery } from 'decentr-js';

import { Environment } from '@environments/environments.definitions';
import { NetworkService } from '../network';

@Injectable({
  providedIn: 'root',
})
export class TransactionsApiService {
  private client: ReplaySubject<DecentrTxClient> = new ReplaySubject(1);

  constructor(
    private environment: Environment,
    private networkService: NetworkService,
  ) {
    this.createAPIClient().subscribe((client) => this.client.next(client));
  }

  public getTransactionByHash(hash: IndexedTx['hash']): Observable<DecodedIndexedTx | undefined> {
    return this.client.pipe(
        take(1),
        mergeMap((client) => client.getByHash(hash)),
    );
  }

  public searchTransactions(searchParams: SearchTxQuery, filter?: SearchTxFilter): Observable<DecodedIndexedTx[]> {
    return this.client.pipe(
        take(1),
        mergeMap((client) => client.search(searchParams, filter)),
    );
  }

  private createAPIClient(): Observable<DecentrTxClient> {
    return this.networkService.getRestUrl().pipe(
        switchMap((api) => DecentrTxClient.create(api)),
    );
  }
}
