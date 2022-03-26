import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ValidatorDetailsPageComponent, ValidatorsPageComponent } from './pages';
import { ValidatorsRoute } from './validators-route';

const routes: Routes = [
  {
    path: '',
    component: ValidatorsPageComponent,
  },
  {
    path: `:${ValidatorsRoute.ValidatorAddressParam}`,
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
