import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import {
  getTransactionByHash,
  searchTransactions,
  Transaction,
  TXsSearchParameters,
  TXsSearchResponse,
} from 'decentr-js';

import { Environment } from '@environments/environments.definitions';
import { NetworkService } from '../network';

@Injectable({
  providedIn: 'root',
})
export class TransactionsApiService {
  constructor(
    private environment: Environment,
    private networkService: NetworkService,
  ) {
  }

  public getTransactionByHash(hash: Transaction['txhash']): Observable<Transaction> {
    return this.networkService.getRestUrl().pipe(
      mergeMap((restUrl) => getTransactionByHash(restUrl, hash)),
    );
  }

  public searchTransactions(searchParams: TXsSearchParameters): Observable<TXsSearchResponse> {
    return this.networkService.getRestUrl().pipe(
      mergeMap((restUrl) => searchTransactions(restUrl, searchParams)),
    );
  }
}
