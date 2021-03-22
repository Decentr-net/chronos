import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlocksRoutingModule } from './blocks-routing.module';
import { BLOCK_PAGES, BlocksPageService } from './pages';
import { InfoCardModule } from '@shared/components/info-card';
import { BlocksTableModule } from '@shared/components/blocks-table';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { TypefaceModule } from '@shared/directives/typeface';
import { BlockDetailsService } from './pages/block-details';
import { TransactionsTableModule } from '@shared/components/transactions-table';


@NgModule({
  imports: [
    CommonModule,
    BlocksRoutingModule,
    InfoCardModule,
    BlocksTableModule,
    NgxSkeletonLoaderModule,
    TypefaceModule,
    TransactionsTableModule,
  ],
  declarations: [
    BLOCK_PAGES,
  ],
  providers: [
    BlocksPageService,
    BlockDetailsService,
  ]
})
export class BlocksModule {
}
