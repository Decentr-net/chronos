import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { DecentrService } from '../decentr';

@Injectable({
  providedIn: 'root',
})
export class MintApiService {

  constructor(
    private decentrService: DecentrService,
  ) {
  }

  public getInflation(): Observable<string> {
    return this.decentrService.decentrClient.pipe(
      mergeMap((decentrClient) => decentrClient.mint.getInflation()),
    );
  }
}
