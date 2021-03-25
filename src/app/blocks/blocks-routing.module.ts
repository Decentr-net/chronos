import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlockDetailsPageComponent, BlocksPageComponent } from './pages';

const ROUTES: Routes = [
  {
    path: '',
    component: BlocksPageComponent,
  },
  {
    path: ':blockHeight',
    component: BlockDetailsPageComponent,
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
export class BlocksRoutingModule {
}
