import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChartTooltipComponent } from './chart-tooltip.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ChartTooltipComponent,
  ],
  exports: [
    ChartTooltipComponent,
  ],
})
export class ChartTooltipModule {
}
