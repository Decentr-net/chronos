import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

import { ChartTooltip } from '../../../dashboard/components/chart/chart-tooltip';

@Component({
  selector: 'app-statistics-chart-tooltip',
  templateUrl: './statistics-chart-tooltip.component.html',
  styleUrls: ['./statistics-chart-tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatisticsChartTooltipComponent extends ChartTooltip {

  constructor(
    changeDetectorRef: ChangeDetectorRef,
  ) {
    super(changeDetectorRef);
  }
}
