import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidatorsPageComponent } from './pages/validators-page';
import { ValidatorDetailsComponent } from './pages/validator-details';

const routes: Routes = [
  {
    path: '',
    component: ValidatorsPageComponent,
  },
  {
    path: ':operatorAddress',
    component: ValidatorDetailsComponent,
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

export class ValidatorsRoutingModule {
}
