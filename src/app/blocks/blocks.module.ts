import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { BlocksTableModule } from '@shared/components/blocks-table';
import { ButtonBackModule } from '@shared/components/button-back';
import { DetailsTableModule } from '@shared/components/details-table';
import { InfoCardModule } from '@shared/components/info-card';
import { TransactionsTableModule } from '@shared/components/transactions-table';
import { TypefaceModule } from '@shared/directives/typeface';
import { BLOCK_PAGES } from './pages';
import { BlocksRoutingModule } from './blocks-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BlocksRoutingModule,
    BlocksTableModule,
    DetailsTableModule,
    InfoCardModule,
    NgxSkeletonLoaderModule,
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
