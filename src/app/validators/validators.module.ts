import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoCardModule } from '@shared/components/info-card';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { TuiLinkModule } from '@taiga-ui/core';
import { TypefaceModule } from '@shared/directives/typeface';
import { VALIDATORS_PAGES } from './pages';
import { VALIDATORS_COMPONENTS } from './components';
import { ValidatorsRoutingModule } from './validators-routing.module';
import { ValidatorStatusComponent } from './components/validator-status/validator-status.component';
import { SvgIconsModule } from '@ngneat/svg-icon';

@NgModule({
  imports: [
    CommonModule,
    InfoCardModule,
    NgxSkeletonLoaderModule,
    TuiTableModule,
    TuiLinkModule,
    TypefaceModule,
    ValidatorsRoutingModule,
    SvgIconsModule,
  ],
  declarations: [
    VALIDATORS_PAGES,
    VALIDATORS_COMPONENTS,
    ValidatorStatusComponent,
  ],
})
export class ValidatorsModule {
}
