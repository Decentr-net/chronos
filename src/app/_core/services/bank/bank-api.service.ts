import { Injectable } from '@angular/core';
import { Coin } from 'decentr-js';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { DecentrService } from '../decentr';

@Injectable({
  providedIn: 'root',
})
export class BankApiService {
  constructor(
    private decentrService: DecentrService,
  ) {
  }

  public getCoinSupply(coinName: string): Observable<Coin> {
    return this.decentrService.decentrClient.pipe(
      switchMap((decentrClient) => decentrClient.bank.getDenomSupply(coinName)),
    );
  }
}
