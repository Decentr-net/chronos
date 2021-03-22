import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidatorsRoutingModule } from './validators-routing.module';
import { VALIDATORS_PAGES } from './pages';
import { VALIDATORS_COMPONENTS } from './components';
import { InfoCardModule } from '@shared/components/info-card';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { TuiLinkModule } from '@taiga-ui/core';


@NgModule({
  imports: [
    CommonModule,
    ValidatorsRoutingModule,
    InfoCardModule,
    TuiTableModule,
    TuiLinkModule,
  ],
  declarations: [
    VALIDATORS_PAGES,
    VALIDATORS_COMPONENTS,
  ],
})
export class ValidatorsModule {
}
