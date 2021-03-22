import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { TuiButtonModule, TuiLinkModule } from '@taiga-ui/core';

import { BlocksTableComponent } from '@shared/components/blocks-table/blocks-table.component';
import { DateAgoModule } from '@shared/pipes/date-ago';
import { TruncateModule } from '@shared/pipes/truncate';
import { TypefaceModule } from '@shared/directives/typeface';

@NgModule({
  imports: [
    CommonModule,
    DateAgoModule,
    RouterModule,
    TruncateModule,
    TuiButtonModule,
    TuiLinkModule,
    TuiTableModule,
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
