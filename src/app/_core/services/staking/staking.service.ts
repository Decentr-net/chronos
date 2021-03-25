import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pool, Validator, ValidatorsFilterParams } from 'decentr-js';

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

  public getValidators(filter?: ValidatorsFilterParams): Observable<Validator[]> {
    return this.stakingApiService.getValidators(filter);
  }

  public getValidatorByAddress(address: Validator['operator_address']): Observable<Validator> {
    return this.stakingApiService.getValidatorByAddress(address);
  }
}
