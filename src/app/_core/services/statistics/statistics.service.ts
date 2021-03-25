import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AdvDdvStatistics } from './statistics.definitions';
import { StatisticsApiService } from './statistics-api.service';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  constructor(
    private statisticsApiService: StatisticsApiService
  ) {
  }

  public getAdvDdvStatistics(): Observable<AdvDdvStatistics> {
    return this.statisticsApiService.getAdvDdvStatistics();
  }
}

