import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from 'decentr-js';

import { DecentrService } from '@core/services/decentr';

@Injectable()
export class TransactionDetailsService {

  constructor(
    private decentrService: DecentrService,
  ) {
  }

  public getTransaction(hash: Transaction['txhash']): Observable<Transaction> {
    return this.decentrService.getTxByHash(hash);
  }
}
