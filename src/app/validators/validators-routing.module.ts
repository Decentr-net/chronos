import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidatorsPageComponent } from './pages/validators-page';

const routes: Routes = [
  {
    path: '',
    component: ValidatorsPageComponent,
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
