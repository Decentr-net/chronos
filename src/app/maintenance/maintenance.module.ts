import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MAINTENANCE_PAGES } from './pages';
import { MaintenanceRoutingModule } from './maintenance-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaintenanceRoutingModule,
  ],
  declarations: [
    MAINTENANCE_PAGES,
  ],
})
export class MaintenanceModule {
}
