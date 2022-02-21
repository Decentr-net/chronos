import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { AdvDdvStatistics, DDVStats, RegistrationStats } from 'decentr-js';

import { DecentrService } from '../decentr';

@Injectable({
  providedIn: 'root',
})
export class StatisticsApiService {
  constructor(
    private decentrService: DecentrService,
  ) {
  }

  public getAdvDdvStatistics(): Observable<AdvDdvStatistics> {
    return this.decentrService.theseusClient.pipe(
      mergeMap((theseusClient) => theseusClient.profile.getAdvDdvStats()),
    );
  }

  public getDdvStatistics(): Observable<DDVStats> {
    return this.decentrService.theseusClient.pipe(
      mergeMap((theseusClient) => theseusClient.ddv.getStats()),
    );
  }

  public getRegisteredUsersStatistics(): Observable<RegistrationStats> {
    return this.decentrService.vulcanClient.pipe(
      mergeMap((vulcanClient) => vulcanClient.registration.getStats()),
    );
  }
}
