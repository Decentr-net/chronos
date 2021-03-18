import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidatorsRoutingModule } from './validators-routing.module';
import { VALIDATORS_PAGES } from './pages';
import { VALIDATORS_COMPONENTS } from './components';


@NgModule({
  imports: [
    CommonModule,
    ValidatorsRoutingModule
  ],
  declarations: [
    VALIDATORS_PAGES,
    VALIDATORS_COMPONENTS,
  ],
})
export class ValidatorsModule {
}
