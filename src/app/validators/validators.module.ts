import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { TuiLinkModule } from '@taiga-ui/core';

import { InfoCardModule } from '@shared/components/info-card';
import { TypefaceModule } from '@shared/directives/typeface';
import { VALIDATORS_PAGES } from './pages';
import { VALIDATORS_COMPONENTS } from './components';
import { ValidatorsRoutingModule } from './validators-routing.module';

@NgModule({
  imports: [
    CommonModule,
    InfoCardModule,
    NgxSkeletonLoaderModule,
    SvgIconsModule,
    TuiTableModule,
    TuiLinkModule,
    TypefaceModule,
    ValidatorsRoutingModule,
  ],
  declarations: [
    VALIDATORS_PAGES,
    VALIDATORS_COMPONENTS,
  ],
})
export class ValidatorsModule {
}
