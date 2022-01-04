import { Injectable } from '@angular/core';
import { Coin } from 'decentr-js';
import { Observable } from 'rxjs';

import { BankApiService } from './bank-api.service';

@Injectable({
  providedIn: 'root',
})
export class BankService {
  constructor(
    private bankApiService: BankApiService,
  ) {
  }

  public getCoinSupply(coinName: string): Observable<Coin> {
    return this.bankApiService.getCoinSupply(coinName);
  }
}
