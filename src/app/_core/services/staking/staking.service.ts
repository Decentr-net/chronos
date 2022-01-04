import { Injectable } from '@angular/core';
import { BondStatusString, Pool, Validator } from 'decentr-js';
import { Observable } from 'rxjs';

import { StakingApiService } from './staking-api.service';

@Injectable({
  providedIn: 'root',
})
export class StakingService {
  constructor(
    private stakingApiService: StakingApiService,
  ) {
  }

  public getPool(): Observable<Pool> {
    return this.stakingApiService.getPool();
  }

  public getValidators(status?: BondStatusString): Observable<Validator[]> {
    return this.stakingApiService.getValidators(status);
  }

  public getValidatorByAddress(address: Validator['operatorAddress']): Observable<Validator> {
    return this.stakingApiService.getValidatorByAddress(address);
  }
}
