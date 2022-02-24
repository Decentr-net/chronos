import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { CHART_TOOLTIP } from '../chart';
import { DdvChartStats } from '@core/services/statistics';
import { StatisticsChartTooltipComponent } from '@shared/components/statistics-chart-tooltip';

@Component({
  selector: 'app-ddv-stats',
  templateUrl: './ddv-stats.component.html',
  styleUrls: ['./ddv-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: CHART_TOOLTIP,
      useValue: StatisticsChartTooltipComponent,
    },
  ],
})
export class DdvStatsComponent {
  @Input() public ddv: DdvChartStats;
}
