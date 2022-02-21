import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AdvDdvStatistics } from 'decentr-js';

import { DdvChartStats, RegisteredUsers } from './statistics.definitions';
import { getStatisticsDayMargin } from '@shared/utils/statistics';
import { StatisticsApiService } from './statistics-api.service';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  constructor(
    private statisticsApiService: StatisticsApiService,
  ) {
  }

  public getAdvDdvStatistics(): Observable<AdvDdvStatistics> {
    return this.statisticsApiService.getAdvDdvStatistics();
  }

  public getDdvStatistics(): Observable<DdvChartStats> {
    return this.statisticsApiService.getDdvStatistics().pipe(
      map((ddvStatistics) => ({
          dayMargin: getStatisticsDayMargin(
            ddvStatistics.stats.map((stat) => [new Date(stat.date).valueOf(), +stat.value]),
          ),
          stats: ddvStatistics.stats.map((stat) => [new Date(stat.date).valueOf(), +stat.value]),
          total: ddvStatistics.total,
        }),
      ),
    );
  }

  public getRegisteredUsersStatistics(): Observable<RegisteredUsers> {
    return this.statisticsApiService.getRegisteredUsersStatistics().pipe(
      map((registeredUsers) => ({
        dayMargin: getStatisticsDayMargin(
          registeredUsers.stats.map((stat) => [new Date(stat.date).valueOf(), +stat.value]),
        ),
        stats: registeredUsers.stats.map((stat) => [new Date(stat.date).valueOf(), +stat.value]),
        total: registeredUsers.total,
      })),
    );
  }
}
