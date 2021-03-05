import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CurrencyModule } from './services/currency';
import { TuiAxesModule, TuiLineChartModule } from '@taiga-ui/addon-charts';
import { CurrencyComponent } from './components/currency';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CurrencyModule.forRoot({ api: 'https://api.coingecko.com/api/v3' }),
    TuiLineChartModule,
    TuiAxesModule,
  ],
  declarations: [
    DashboardComponent,
    CurrencyComponent,
  ],
  providers: []
})
export class DashboardModule {
}
