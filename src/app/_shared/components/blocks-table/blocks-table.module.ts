import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BlocksTableComponent } from './blocks-table.component';
import { BreakpointModule } from '@shared/directives/breakpoint';
import { DataTableModule } from '@shared/components/data-table';
import { DateAgoModule } from '@shared/pipes/date-ago';
import { NumberFormatModule } from '@shared/pipes/number-format';
import { TruncateModule } from '@shared/pipes/truncate';
import { TypefaceModule } from '@shared/directives/typeface';

@NgModule({
  imports: [
    BreakpointModule,
    CommonModule,
    DataTableModule,
    DateAgoModule,
    NumberFormatModule,
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
