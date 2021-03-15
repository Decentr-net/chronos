import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DASHBOARD_COMPONENTS } from './components';
import { DASHBOARD_PAGES } from './pages';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { TuiIslandModule } from '@taiga-ui/kit';
import { NumberSuffixModule } from '@shared/pipes/number-suffix';
import { DateAgoModule } from '@shared/pipes/date-ago';


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HighchartsChartModule,
    TuiIslandModule,
    NumberSuffixModule,
    DateAgoModule,
  ],
  declarations: [
    DASHBOARD_COMPONENTS,
    DASHBOARD_PAGES,
  ],
})
export class DashboardModule {
}
