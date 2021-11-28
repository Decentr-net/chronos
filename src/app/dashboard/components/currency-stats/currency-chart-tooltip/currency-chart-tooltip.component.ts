import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

import { ChartTooltip } from '../../chart/chart-tooltip';

@Component({
  selector: 'app-currency-chart-tooltip',
  templateUrl: './currency-chart-tooltip.component.html',
  styleUrls: ['./currency-chart-tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyChartTooltipComponent extends ChartTooltip {

  constructor(
    changeDetectorRef: ChangeDetectorRef,
  ) {
    super(changeDetectorRef);
  }
}
