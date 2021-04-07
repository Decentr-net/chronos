import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconsModule } from '@ngneat/svg-icon';

import { MAINTENANCE_PAGES } from './pages';
import { MaintenanceRoutingModule } from './maintenance-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaintenanceRoutingModule,
    SvgIconsModule,
  ],
  declarations: [
    MAINTENANCE_PAGES,
  ],
})
export class MaintenanceModule {
}
