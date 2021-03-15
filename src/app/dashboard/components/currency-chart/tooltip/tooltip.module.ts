import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TooltipComponent } from './tooltip.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TooltipComponent,
  ],
  exports: [
    TooltipComponent,
  ],
})
export class TooltipModule {}
