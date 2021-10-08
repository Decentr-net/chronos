import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SvgIconsModule } from '@ngneat/svg-icon';

import { BreakpointModule } from '@shared/directives/breakpoint';
import { DataTableModule } from '@shared/components/data-table';
import { TransactionMessageTypeIconModule } from '@shared/components/transaction-message-type-icon';
import { DateAgoModule } from '@shared/pipes/date-ago';
import { NumberFormatModule } from '@shared/pipes/number-format';
import { TooltipModule } from '@shared/components/tooltip';
import { TransactionsTableComponent } from './transactions-table.component';
import { TruncateModule } from '@shared/pipes/truncate';
import { TxMessageTypeLabelModule } from '@shared/pipes/tx-message-type-label';
import { TypefaceModule } from '@shared/directives/typeface';

@NgModule({
  imports: [
    BreakpointModule,
    CdkTableModule,
    CommonModule,
    DateAgoModule,
    DataTableModule,
    NumberFormatModule,
    RouterModule,
    SvgIconsModule,
    TooltipModule,
    TransactionMessageTypeIconModule,
    TruncateModule,
    TxMessageTypeLabelModule,
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
