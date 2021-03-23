import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction, TXsSearchParams, TXsSearchResponse } from 'decentr-js';
import { map, switchMap } from 'rxjs/operators';

import { DecentrService } from '@core/services/decentr';
import { sortByHeight } from '@shared/utils/blockchain';

@Injectable()
export class TransactionsPageService {

  constructor(
    private decentrService: DecentrService,
  ) {
  }

  public getLatestTxs(): Observable<Transaction[]> {
    return this.decentrService.getTxs({ txMinHeight: 0, limit: 1 }).pipe(
      switchMap(txsResponse => this.decentrService.getLatestTxs(50, txsResponse.page_total)),
      map(tx => tx.sort(sortByHeight)),
    );
  }

  public getTxs(searchParams: TXsSearchParams): Observable<TXsSearchResponse> {
    return this.decentrService.getTxs(searchParams);
  }
}
