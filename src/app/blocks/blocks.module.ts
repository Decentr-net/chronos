import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlocksRoutingModule } from './blocks-routing.module';
import { BLOCK_PAGES } from './pages';
import { InfoCardModule } from '@shared/components/info-card';
import { BlocksTableModule } from '@shared/components/blocks-table';


@NgModule({
  imports: [
    CommonModule,
    BlocksRoutingModule,
    InfoCardModule,
    BlocksTableModule,
  ],
  declarations: [
    BLOCK_PAGES,
  ],
})
export class BlocksModule {
}
