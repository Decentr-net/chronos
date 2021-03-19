import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SvgIconsModule } from '@ngneat/svg-icon';

import { CurrencyModule } from '@core/services/currency';
import { environment } from '../../environments/environment';
import { Environment } from '../../environments/environments.definitions';

@NgModule({
  imports: [
    CommonModule,
    CurrencyModule,
    SvgIconsModule.forRoot(),
    HttpClientModule,
  ],
  providers: [
    {
      provide: Environment,
      useValue: environment,
    },
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule has already been loaded. Import CoreModule in the AppModule only.');
    }
  }
}
