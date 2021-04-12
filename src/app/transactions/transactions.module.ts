import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { InfoCardModule } from '@shared/components/info-card';
import { TransactionMessageDetailsModule } from '@shared/components/transaction-message-details';
import { TransactionMessageTypeIconModule } from '@shared/components/transaction-message-type-icon';
import { TransactionsTableModule } from '@shared/components/transactions-table';
import { TypefaceModule } from '@shared/directives/typeface';
import { TransactionsRoutingModule } from './transactions-routing.module';
import { TRANSACTION_COMPONENTS } from './components';
import { TRANSACTIONS_PAGES } from './pages';

@NgModule({
  imports: [
    CommonModule,
    InfoCardModule,
    NgxSkeletonLoaderModule,
    TransactionMessageDetailsModule,
    TransactionMessageTypeIconModule,
    TransactionsRoutingModule,
    TransactionsTableModule,
    TypefaceModule,
  ],
  declarations: [
    TRANSACTION_COMPONENTS,
    TRANSACTIONS_PAGES,
  ],
})
export class TransactionsModule {
}
