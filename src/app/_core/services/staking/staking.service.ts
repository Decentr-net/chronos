import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MintingInflation, Pool, TotalSupply, Validator, ValidatorsFilterParameters } from 'decentr-js';

import { StakingApiService } from './staking-api.service';

@Injectable({
  providedIn: 'root',
})
export class StakingService {
  constructor(
    private stakingApiService: StakingApiService,
  ) {
  }

  public getCoinSupply(coinName: string): Observable<TotalSupply['amount']> {
    return this.stakingApiService.getCoinSupply(coinName);
  }

  public getInflation(): Observable<MintingInflation> {
    return this.stakingApiService.getInflation();
  }

  public getPool(): Observable<Pool> {
    return this.stakingApiService.getPool();
  }

  public getValidators(filter?: ValidatorsFilterParameters): Observable<Validator[]> {
    return this.stakingApiService.getValidators(filter);
  }

  public getValidatorByAddress(address: Validator['operator_address']): Observable<Validator> {
    return this.stakingApiService.getValidatorByAddress(address);
  }
}
