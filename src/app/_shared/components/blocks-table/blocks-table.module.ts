import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DataTableModule } from '@shared/components/data-table';
import { DateAgoModule } from '@shared/pipes/date-ago';
import { TruncateModule } from '@shared/pipes/truncate';
import { TypefaceModule } from '@shared/directives/typeface';
import { BlocksTableComponent } from './blocks-table.component';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    DateAgoModule,
    RouterModule,
    TruncateModule,
    TypefaceModule,
  ],
  declarations: [
    BlocksTableComponent,
  ],
  exports: [
    BlocksTableComponent,
  ],
})
export class BlocksTableModule {
}
