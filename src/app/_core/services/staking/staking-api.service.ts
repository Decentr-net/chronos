import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import {
  getPool,
  getValidator,
  getValidators,
  Pool,
  Validator,
  ValidatorsFilterParams,
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

  public getPool(): Observable<Pool> {
    return this.networkService.getRestUrl().pipe(
      mergeMap((restUrl) => getPool(restUrl)),
    );
  }

  public getValidators(filter?: ValidatorsFilterParams): Observable<Validator[]> {
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
