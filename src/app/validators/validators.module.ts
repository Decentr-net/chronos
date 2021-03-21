import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidatorsRoutingModule } from './validators-routing.module';
import { VALIDATORS_PAGES } from './pages';
import { VALIDATORS_COMPONENTS } from './components';
import { InfoCardModule } from '@shared/components/info-card';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { TuiLinkModule } from '@taiga-ui/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { TypefaceModule } from '@shared/directives/typeface';
import { ValidatorsPageService } from './pages/validators-page/validators-page.service';
import { ValidatorDetailsService } from './pages/validator-details/validator-details.service';


@NgModule({
  imports: [
    CommonModule,
    ValidatorsRoutingModule,
    InfoCardModule,
    TuiTableModule,
    TuiLinkModule,
    NgxSkeletonLoaderModule,
    TypefaceModule,
  ],
  declarations: [
    VALIDATORS_PAGES,
    VALIDATORS_COMPONENTS,
  ],
  providers: [
    ValidatorDetailsService,
    ValidatorsPageService,
  ],
})
export class ValidatorsModule {
}
