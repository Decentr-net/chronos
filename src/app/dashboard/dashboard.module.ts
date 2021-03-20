import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DASHBOARD_COMPONENTS } from './components';
import { DASHBOARD_PAGES } from './pages';
import { BlocksTableModule } from '@shared/components/blocks-table/blocks-table.module';
import { DateAgoModule } from '@shared/pipes/date-ago';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageService } from './pages/dashboard-page';
import { HighchartsChartModule } from 'highcharts-angular';
import { InfoCardModule } from '@shared/components/info-card';
import { MarginLabelModule } from '@shared/components/margin-label';
import { NumberSuffixModule } from '@shared/pipes/number-suffix';
import { PositiveNumberModule } from '@shared/pipes/positiveNumber';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { TransactionsTableModule } from '@shared/components/transactions-table';
import { TuiButtonModule, TuiFormatNumberPipeModule, TuiModeModule } from '@taiga-ui/core';
import { TypefaceModule } from '@shared/directives/typeface';

@NgModule({
  imports: [
    BlocksTableModule,
    CommonModule,
    DashboardRoutingModule,
    DateAgoModule,
    HighchartsChartModule,
    InfoCardModule,
    MarginLabelModule,
    NumberSuffixModule,
    PositiveNumberModule,
    SvgIconsModule,
    TransactionsTableModule,
    TuiButtonModule,
    TuiFormatNumberPipeModule,
    TuiModeModule,
    TypefaceModule,
  ],
  declarations: [
    DASHBOARD_COMPONENTS,
    DASHBOARD_PAGES,
  ],
  providers: [
    DashboardPageService,
  ]
})
export class DashboardModule {
}
