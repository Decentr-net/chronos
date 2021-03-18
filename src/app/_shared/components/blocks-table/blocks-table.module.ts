import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { TuiButtonModule, TuiLinkModule } from '@taiga-ui/core';
import { DateAgoModule } from '@shared/pipes/date-ago';
import { BlocksTableComponent } from '@shared/components/blocks-table/blocks-table.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    TuiTableModule,
    TuiButtonModule,
    CommonModule,
    DateAgoModule,
    TuiLinkModule,
    RouterModule,
  ],
  declarations: [
    BlocksTableComponent,
  ],
  exports: [
    BlocksTableComponent
  ],
})
export class BlocksTableModule { }
