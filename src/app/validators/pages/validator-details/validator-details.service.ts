import { Injectable } from '@angular/core';
import { DecentrService } from '@core/services/decentr';
import { Observable } from 'rxjs';
import { Validator } from 'decentr-js';

@Injectable()
export class ValidatorDetailsService {

  constructor(
    private decentrService: DecentrService,
  ) {
  }

  getValidatorDetails(operatorAddress: Validator['operator_address']): Observable<Validator> {
    return this.decentrService.getValidatorByAddress(operatorAddress);
  }
}
