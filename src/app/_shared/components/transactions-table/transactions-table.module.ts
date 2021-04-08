import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DateAgoModule } from '@shared/pipes/date-ago';
import { TransactionsTableComponent } from './transactions-table.component';
import { TruncateModule } from '@shared/pipes/truncate';
import { TypefaceModule } from '@shared/directives/typeface';
import { DataTableModule } from '@shared/components/data-table';

@NgModule({
  imports: [
    CdkTableModule,
    CommonModule,
    DateAgoModule,
    DataTableModule,
    RouterModule,
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
