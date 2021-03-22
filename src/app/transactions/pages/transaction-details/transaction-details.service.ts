import { Injectable } from '@angular/core';
import { DecentrService } from '@core/services/decentr';
import { Transaction } from 'decentr-js';
import { Observable } from 'rxjs';

@Injectable()
export class TransactionDetailsService {

  constructor(
    private decentrService: DecentrService
  ) {
  }

  public getTransaction(hash: Transaction['txhash']): Observable<Transaction> {
    return this.decentrService.getTxByHash(hash);
  }
}
