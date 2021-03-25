import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { ConfigurationService } from '@core/services/configuration';
import { AdvDdvStatistics } from './statistics.definitions';

@Injectable({
  providedIn: 'root',
})
export class StatisticsApiService {
  constructor(
    private configurationService: ConfigurationService,
    private httpClient: HttpClient,
  ) {
  }

  public getAdvDdvStatistics(): Observable<AdvDdvStatistics> {
    return this.configurationService.getTheseusUrl().pipe(
      mergeMap((theseusUrl) => this.httpClient.get<AdvDdvStatistics>(`${theseusUrl}/v1/profiles/stats`)),
    );
  }
}