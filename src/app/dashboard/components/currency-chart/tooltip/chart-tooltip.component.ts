import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { TooltipFormatterContextObject } from 'highcharts';

@Component({
  selector: 'app-chart-tooltip',
  templateUrl: './chart-tooltip.component.html',
  styleUrls: ['./chart-tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartTooltipComponent {
  public tooltipData: TooltipFormatterContextObject;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
  ) {
  }

  @Input() set data(value: TooltipFormatterContextObject) {
    this.tooltipData = value;
    this.changeDetectorRef.detectChanges();
  }
}
