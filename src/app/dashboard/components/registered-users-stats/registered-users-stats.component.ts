import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { CHART_TOOLTIP } from '../chart';
import { RegisteredUsers } from '@core/services/statistics';
import { StatisticsChartTooltipComponent } from '@shared/components/statistics-chart-tooltip';

@Component({
  selector: 'app-registered-users-stats',
  templateUrl: './registered-users-stats.component.html',
  styleUrls: ['./registered-users-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: CHART_TOOLTIP,
      useValue: StatisticsChartTooltipComponent,
    },
  ],
})
export class RegisteredUsersStatsComponent {
  @Input() public registeredUsersStats: RegisteredUsers;
}
