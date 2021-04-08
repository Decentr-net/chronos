import { NgModule } from '@angular/core';
import { SvgIconsModule } from '@ngneat/svg-icon';

import { MAINTENANCE_PAGES } from './pages';
import { MaintenanceRoutingModule } from './maintenance-routing.module';

@NgModule({
  imports: [
    MaintenanceRoutingModule,
    SvgIconsModule,
  ],
  declarations: [
    MAINTENANCE_PAGES,
  ],
})
export class MaintenanceModule {
}
