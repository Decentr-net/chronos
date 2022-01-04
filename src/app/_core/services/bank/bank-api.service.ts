import { Injectable } from '@angular/core';
import { Coin, DecentrBankClient } from 'decentr-js';
import { Observable, ReplaySubject } from 'rxjs';
import { mergeMap, switchMap, take } from 'rxjs/operators';

import { NetworkService } from '../network';

@Injectable({
  providedIn: 'root',
})
export class BankApiService {
  private client: ReplaySubject<DecentrBankClient> = new ReplaySubject(1);

  constructor(
    private networkService: NetworkService,
  ) {
    this.createAPIClient().subscribe((client) => this.client.next(client));
  }

  public getCoinSupply(coinName: string): Observable<Coin> {
    return this.client.pipe(
      take(1),
      mergeMap((client) => client.getDenomSupply(coinName)),
    );
  }

  private createAPIClient(): Observable<DecentrBankClient> {
    return this.networkService.getRestUrl().pipe(
      switchMap((api) => DecentrBankClient.create(api)),
    );
  }
}
