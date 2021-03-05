import { NgModule } from '@angular/core';

import { CurrencyApiService } from './api';
import { CurrencyService } from './currency.service';

@NgModule({
  providers: [
    CurrencyApiService,
    CurrencyService,
  ],
})
export class CurrencyModule {
}
