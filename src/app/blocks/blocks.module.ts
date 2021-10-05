import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { BLOCK_PAGES } from './pages';
import { BlocksRoutingModule } from './blocks-routing.module';
import { BlocksTableModule } from '@shared/components/blocks-table';
import { ButtonBackModule } from '@shared/components/button-back';
import { DetailsTableModule } from '@shared/components/details-table';
import { InfoCardModule } from '@shared/components/info-card';
import { NumberFormatModule } from '@shared/pipes/number-format';
import { PageLinkModule } from '@shared/components/page-link';
import { TransactionsTableModule } from '@shared/components/transactions-table';
import { TypefaceModule } from '@shared/directives/typeface';

@NgModule({
  imports: [
    CommonModule,
    BlocksRoutingModule,
    BlocksTableModule,
    DetailsTableModule,
    InfoCardModule,
    NgxSkeletonLoaderModule,
    NumberFormatModule,
    PageLinkModule,
    SvgIconsModule,
    TypefaceModule,
    TransactionsTableModule,
    ButtonBackModule,
  ],
  declarations: [
    BLOCK_PAGES,
  ],
})
export class BlocksModule {
}
