import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconsModule } from '@ngneat/svg-icon';

import { MarginLabelComponent } from './margin-label.component';
import { NumberFormatModule } from '@shared/pipes/number-format';
import { PositiveNumberModule } from '../../pipes/positive-number';

@NgModule({
  imports: [
    CommonModule,
    NumberFormatModule,
    PositiveNumberModule,
    SvgIconsModule,
  ],
  declarations: [
    MarginLabelComponent,
  ],
  exports: [
    MarginLabelComponent,
  ],
})
export class MarginLabelModule {
}
