import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { BreakpointModule } from '@shared/directives/breakpoint';
import { ButtonBackModule } from '@shared/components/button-back';
import { DataTableModule } from '@shared/components/data-table';
import { DetailsTableModule } from '@shared/components/details-table';
import { InfoCardModule } from '@shared/components/info-card';
import { NumberFormatModule } from '@shared/pipes/number-format';
import { TooltipModule } from '@shared/components/tooltip';
import { TypefaceModule } from '@shared/directives/typeface';
import { VALIDATORS_PAGES } from './pages';
import { VALIDATORS_COMPONENTS } from './components';
import { ValidatorsRoutingModule } from './validators-routing.module';

@NgModule({
  imports: [
    BreakpointModule,
    ButtonBackModule,
    DataTableModule,
    DetailsTableModule,
    CommonModule,
    InfoCardModule,
    NgxSkeletonLoaderModule,
    NumberFormatModule,
    SvgIconsModule,
    TooltipModule,
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
