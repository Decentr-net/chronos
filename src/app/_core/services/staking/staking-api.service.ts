import { Injectable } from '@angular/core';
import { BondStatusString, Pool, Validator } from 'decentr-js';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { DecentrService } from '../decentr';

@Injectable({
  providedIn: 'root',
})
export class StakingApiService {

  constructor(
    private decentrService: DecentrService,
  ) {
  }

  public getPool(): Observable<Pool> {
    return this.decentrService.decentrClient.pipe(
      mergeMap((decentrClient) => decentrClient.staking.getPool()),
    );
  }

  public getValidators(status?: BondStatusString): Observable<Validator[]> {
    return this.decentrService.decentrClient.pipe(
      mergeMap((decentrClient) => decentrClient.staking.getValidators(status)),
    );
  }

  public getValidatorByAddress(address: Validator['operatorAddress']): Observable<Validator> {
    return this.decentrService.decentrClient.pipe(
      mergeMap((decentrClient) => decentrClient.staking.getValidator(address)),
    );
  }
}
