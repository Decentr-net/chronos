import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AdvDdvStatistics, RegisteredUsers } from './statistics.definitions';
import { StatisticsApiService } from './statistics-api.service';
import { map } from 'rxjs/operators';
import { getRegisteredUsersDayChange } from '@shared/utils/statistics';

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

  public getRegisteredUsersStatistics(): Observable<RegisteredUsers> {
    return this.statisticsApiService.getRegisteredUsersStatistics().pipe(
      map((registeredUsers) => ({
        dayMargin: getRegisteredUsersDayChange(
          registeredUsers.stats.map((stat) => [new Date(stat.date).valueOf(), +stat.value]),
        ),
        stats: registeredUsers.stats.map((stat) => [new Date(stat.date).valueOf(), +stat.value]),
        total: registeredUsers.total,
      })),
    );
  }
}
