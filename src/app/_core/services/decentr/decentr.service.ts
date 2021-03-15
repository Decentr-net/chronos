import { Injectable } from '@angular/core';
import { DecentrApiService } from '@core/services/decentr/api';
import { defer, Observable } from 'rxjs';
import { BlockHeader, Pool } from 'decentr-js';
import { map, pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DecentrService {

  constructor(
    private decentrApiService: DecentrApiService,
  ) {
  }

  getPool(): Observable<Pool> {
    return defer(() => this.decentrApiService.getPool());
  }

  getLatestBlock(): Observable<Pick<BlockHeader, 'height' | 'time'>> {
    return defer(() => this.decentrApiService.getLatestBlock()).pipe(
      pluck('block', 'header'),
      map(({ height, time }) => ({ height, time })),
    );
  }
}
