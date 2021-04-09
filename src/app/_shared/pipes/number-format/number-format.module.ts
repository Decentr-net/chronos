import { NgModule } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { NumberFormatPipe } from '@shared/pipes/number-format';

@NgModule({
  declarations: [
    NumberFormatPipe,
  ],
  providers: [
    DecimalPipe,
  ],
  exports: [
    NumberFormatPipe,
  ],
})
export class NumberFormatModule {
}
