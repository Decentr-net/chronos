import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from 'decentr-js';
import { map, switchMap } from 'rxjs/operators';
import { sortByHeight } from '@shared/utils/blockchain';
import { DecentrService } from '@core/services/decentr';

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
}
