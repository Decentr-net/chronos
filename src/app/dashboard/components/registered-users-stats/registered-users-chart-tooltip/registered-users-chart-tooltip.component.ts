import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

import { ChartTooltip } from '../../chart/chart-tooltip';

@Component({
  selector: 'app-registered-users-chart-tooltip',
  templateUrl: './registered-users-chart-tooltip.component.html',
  styleUrls: ['./registered-users-chart-tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisteredUsersChartTooltipComponent extends ChartTooltip {

  constructor(
    changeDetectorRef: ChangeDetectorRef,
  ) {
    super(changeDetectorRef);
  }
}
