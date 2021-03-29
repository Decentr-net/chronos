import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmptyPageComponent } from './empty-page.component';

const ROUTES: Routes = [
  {
    path: '',
    component: EmptyPageComponent,
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
export class EmptyPageRoutingModule {
}
