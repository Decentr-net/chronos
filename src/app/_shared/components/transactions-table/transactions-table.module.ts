import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TuiButtonModule, TuiLinkModule } from '@taiga-ui/core';
import { TuiTableModule } from '@taiga-ui/addon-table';

import { DateAgoModule } from '@shared/pipes/date-ago';
import { TransactionsTableComponent } from './transactions-table.component';
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
    TransactionsTableComponent,
  ],
  exports: [
    TransactionsTableComponent,
  ],
})
export class TransactionsTableModule {
}
