import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlocksRoutingModule } from './blocks-routing.module';
import { BLOCK_PAGES, BlocksPageService } from './pages';
import { InfoCardModule } from '@shared/components/info-card';
import { BlocksTableModule } from '@shared/components/blocks-table';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


@NgModule({
  imports: [
    CommonModule,
    BlocksRoutingModule,
    InfoCardModule,
    BlocksTableModule,
    NgxSkeletonLoaderModule,
  ],
  declarations: [
    BLOCK_PAGES,
  ],
  providers: [
    BlocksPageService,
  ]
})
export class BlocksModule {
}
