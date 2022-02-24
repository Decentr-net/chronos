import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsChartTooltipComponent } from './statistics-chart-tooltip.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    StatisticsChartTooltipComponent,
  ],
  exports: [
    StatisticsChartTooltipComponent,
  ],
})
export class StatisticsChartTooltipModule {
}
