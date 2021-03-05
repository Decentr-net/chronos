import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiAxesModule, TuiLineChartModule } from '@taiga-ui/addon-charts';

import { DASHBOARD_COMPONENTS } from './components';
import { DASHBOARD_PAGES } from './pages';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TuiAxesModule,
    TuiLineChartModule,
  ],
  declarations: [
    DASHBOARD_COMPONENTS,
    DASHBOARD_PAGES,
  ],
})
export class DashboardModule {
}
