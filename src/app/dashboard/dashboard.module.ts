import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DASHBOARD_COMPONENTS } from './components';
import { DASHBOARD_PAGES } from './pages';
import { BlocksTableModule } from '@shared/components/blocks-table/blocks-table.module';
import { DateAgoModule } from '@shared/pipes/date-ago';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { InfoCardModule } from '@shared/components/info-card';
import { MarginLabelModule } from '@shared/components/margin-label';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NumberFormatModule } from '@shared/pipes/number-format';
import { NumberSuffixModule } from '@shared/pipes/number-suffix';
import { ProgressBarModule } from '@shared/components/progress-bar';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { TransactionsTableModule } from '@shared/components/transactions-table';
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
    NgxSkeletonLoaderModule,
    NumberFormatModule,
    NumberSuffixModule,
    ProgressBarModule,
    SvgIconsModule,
    TransactionsTableModule,
    TypefaceModule,
  ],
  declarations: [
    DASHBOARD_COMPONENTS,
    DASHBOARD_PAGES,
  ],
})
export class DashboardModule {
}
