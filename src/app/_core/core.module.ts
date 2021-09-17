import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';
import { SvgIconsModule } from '@ngneat/svg-icon';

import { CORE_GUARDS } from '@core/guards';
import { environment } from '@environments/environment';
import { Environment } from '@environments/environments.definitions';
import { NetworkSelectorService } from '@shared/components/network-selector';
import { NetworkSelectorService as NetworkSelectorServiceImpl } from './services/network-selector';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgxGoogleAnalyticsModule.forRoot(environment.ga),
    NgxGoogleAnalyticsRouterModule,
    SvgIconsModule.forRoot(),
  ],
  providers: [
    CORE_GUARDS,
    {
      provide: Environment,
      useValue: environment,
    },
    {
      provide: NetworkSelectorService,
      useExisting: NetworkSelectorServiceImpl,
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
