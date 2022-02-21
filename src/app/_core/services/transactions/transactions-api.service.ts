import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { DecodedIndexedTx, IndexedTx, SearchTxFilter, SearchTxQuery } from 'decentr-js';

import { DecentrService } from '../decentr';

@Injectable({
  providedIn: 'root',
})
export class TransactionsApiService {

  constructor(
    private decentrService: DecentrService,
  ) {
  }

  public getTransactionByHash(hash: IndexedTx['hash']): Observable<DecodedIndexedTx | undefined> {
    return this.decentrService.decentrClient.pipe(
        mergeMap((decentrClient) => decentrClient.tx.getByHash(hash)),
    );
  }

  public searchTransactions(searchParams: SearchTxQuery, filter?: SearchTxFilter): Observable<DecodedIndexedTx[]> {
    return this.decentrService.decentrClient.pipe(
        mergeMap((decentrClient) => decentrClient.tx.search(searchParams, filter)),
    );
  }
}
