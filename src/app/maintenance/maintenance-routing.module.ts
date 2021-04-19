import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MaintenancePageComponent } from './pages';

const ROUTES: Routes = [
  {
    path: '',
    component: MaintenancePageComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
  ],
  exports: [
    RouterModule,
  ],
})
export class MaintenanceRoutingModule {
}
