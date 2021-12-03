import { ChangeDetectorRef } from '@angular/core';
import { TooltipFormatterContextObject } from 'highcharts';

export abstract class ChartTooltip {
  public tooltipData: TooltipFormatterContextObject;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
  ) {
  }

  set data(value: TooltipFormatterContextObject) {
    this.tooltipData = value;
    this.changeDetectorRef.detectChanges();
  }
}
