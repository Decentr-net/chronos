import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { TuiButtonModule, TuiLinkModule } from '@taiga-ui/core';
import { RouterModule } from '@angular/router';

import { BlocksTableComponent } from '@shared/components/blocks-table/blocks-table.component';
import { DateAgoModule } from '@shared/pipes/date-ago';
import { TruncateModule } from '@shared/pipes/truncate';

@NgModule({
  imports: [
    CommonModule,
    DateAgoModule,
    RouterModule,
    TuiButtonModule,
    TuiLinkModule,
    TuiTableModule,
    TruncateModule,
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
