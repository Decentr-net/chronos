import { Injectable } from '@angular/core';
import { DecentrService } from '@core/services/decentr';
import { Observable } from 'rxjs';
import { Validator } from 'decentr-js';

@Injectable()

export class ValidatorsPageService {

  constructor(
    private decentrService: DecentrService
  ) {
  }

  getValidators(): Observable<Validator[]> {
    return this.decentrService.getValidators();
  }
}
