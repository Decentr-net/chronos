import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DASHBOARD_COMPONENTS } from './components';
import { DASHBOARD_PAGES } from './pages';
import { BlocksTableModule } from '@shared/components/blocks-table/blocks-table.module';
import { DateAgoModule } from '@shared/pipes/date-ago';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { InfoCardModule } from '@shared/components/info-card';
import { NumberSuffixModule } from '@shared/pipes/number-suffix';
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
    NumberSuffixModule,
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
})
export class DashboardModule {
}
