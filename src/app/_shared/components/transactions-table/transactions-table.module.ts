import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DataTableModule } from '@shared/components/data-table';
import { TransactionMessageTypeIconModule } from '@shared/components/transaction-message-type-icon';
import { DateAgoModule } from '@shared/pipes/date-ago';
import { NumberFormatModule } from '@shared/pipes/number-format';
import { TransactionsTableComponent } from './transactions-table.component';
import { TruncateModule } from '@shared/pipes/truncate';
import { TypefaceModule } from '@shared/directives/typeface';

@NgModule({
  imports: [
    CdkTableModule,
    CommonModule,
    DateAgoModule,
    DataTableModule,
    NumberFormatModule,
    RouterModule,
    TransactionMessageTypeIconModule,
    TruncateModule,
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
