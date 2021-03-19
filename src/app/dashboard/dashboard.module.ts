import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DASHBOARD_COMPONENTS } from './components';
import { DASHBOARD_PAGES } from './pages';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { NumberSuffixModule } from '@shared/pipes/number-suffix';
import { DateAgoModule } from '@shared/pipes/date-ago';
import { TransactionsTableModule } from '@shared/components/transactions-table';
import { TuiButtonModule, TuiModeModule } from '@taiga-ui/core';
import { BlocksTableModule } from '@shared/components/blocks-table/blocks-table.module';
import { InfoCardModule } from '@shared/components/info-card';
import { TypefaceModule } from '@shared/directives/typeface';


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HighchartsChartModule,
    NumberSuffixModule,
    DateAgoModule,
    TransactionsTableModule,
    TuiButtonModule,
    TuiModeModule,
    BlocksTableModule,
    InfoCardModule,
    TypefaceModule,
  ],
  declarations: [
    DASHBOARD_COMPONENTS,
    DASHBOARD_PAGES,
  ],
})
export class DashboardModule {
}
