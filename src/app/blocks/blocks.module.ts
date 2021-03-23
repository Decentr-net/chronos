import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlockDetailsService } from './pages/block-details';
import { BlocksRoutingModule } from './blocks-routing.module';
import { BlocksTableModule } from '@shared/components/blocks-table';
import { BLOCK_PAGES, BlocksPageService } from './pages';
import { InfoCardModule } from '@shared/components/info-card';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { TransactionsTableModule } from '@shared/components/transactions-table';
import { TypefaceModule } from '@shared/directives/typeface';

@NgModule({
  imports: [
    CommonModule,
    BlocksRoutingModule,
    BlocksTableModule,
    InfoCardModule,
    NgxSkeletonLoaderModule,
    TypefaceModule,
    TransactionsTableModule,
  ],
  declarations: [
    BLOCK_PAGES,
  ],
  providers: [
    BlockDetailsService,
    BlocksPageService,
  ]
})
export class BlocksModule {
}
