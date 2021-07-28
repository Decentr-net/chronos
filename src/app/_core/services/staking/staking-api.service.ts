import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import {
  getCoinSupply,
  getPool,
  getValidator,
  getValidators,
  Pool,
  TotalSupply,
  Validator,
  ValidatorsFilterParameters,
} from 'decentr-js';

import { NetworkService } from '../network';

@Injectable({
  providedIn: 'root',
})
export class StakingApiService {
  constructor(
    private networkService: NetworkService,
  ) {
  }

  public getCoinSupply(coinName: string): Observable<TotalSupply['amount']> {
    return this.networkService.getRestUrl().pipe(
      mergeMap((restUrl) => getCoinSupply(restUrl, coinName)),
    );
  }

  public getPool(): Observable<Pool> {
    return this.networkService.getRestUrl().pipe(
      mergeMap((restUrl) => getPool(restUrl)),
    );
  }

  public getValidators(filter?: ValidatorsFilterParameters): Observable<Validator[]> {
    return this.networkService.getRestUrl().pipe(
      mergeMap((restUrl) => getValidators(restUrl, filter)),
    );
  }

  public getValidatorByAddress(address: Validator['operator_address']): Observable<Validator> {
    return this.networkService.getRestUrl().pipe(
      mergeMap((restUrl) => getValidator(restUrl, address)),
    );
  }
}
