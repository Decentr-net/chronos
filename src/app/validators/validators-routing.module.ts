import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ValidatorDetailsPageComponent, ValidatorsPageComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: ValidatorsPageComponent,
  },
  {
    path: ':operatorAddress',
    component: ValidatorDetailsPageComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})

export class ValidatorsRoutingModule {
}
