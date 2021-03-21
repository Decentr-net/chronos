import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlocksPageComponent } from './pages/blocks-page';
import { BlockDetailsComponent } from './pages/block-details';

const routes: Routes = [
  {
    path: '',
    component: BlocksPageComponent,
  },
  {
    path: ':blockHeight',
    component: BlockDetailsComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class BlocksRoutingModule {
}
