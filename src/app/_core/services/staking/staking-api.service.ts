import { Injectable } from '@angular/core';
import { BondStatusString, DecentrStakingClient, Pool, Validator } from 'decentr-js';
import { Observable, ReplaySubject } from 'rxjs';
import { mergeMap, switchMap, take } from 'rxjs/operators';

import { NetworkService } from '../network';

@Injectable({
  providedIn: 'root',
})
export class StakingApiService {
  private client: ReplaySubject<DecentrStakingClient> = new ReplaySubject(1);

  constructor(
    private networkService: NetworkService,
  ) {
    this.createAPIClient().subscribe((client) => this.client.next(client));
  }

  public getPool(): Observable<Pool> {
    return this.client.pipe(
      take(1),
      mergeMap((client) => client.getPool()),
    );
  }

  public getValidators(status?: BondStatusString): Observable<Validator[]> {
    return this.client.pipe(
      take(1),
      mergeMap((client) => client.getValidators(status)),
    );
  }

  public getValidatorByAddress(address: Validator['operatorAddress']): Observable<Validator> {
    return this.client.pipe(
      take(1),
      mergeMap((client) => client.getValidator(address)),
    );
  }

  private createAPIClient(): Observable<DecentrStakingClient> {
    return this.networkService.getRestUrl().pipe(
      switchMap((api) => DecentrStakingClient.create(api)),
    );
  }
}
