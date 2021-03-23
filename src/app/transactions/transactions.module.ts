import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoCardModule } from '@shared/components/info-card';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { TRANSACTION_COMPONENTS } from './components';
import { TransactionDetailsService } from './pages/transaction-details';
import { TRANSACTIONS_PAGES } from './pages';
import { TransactionsPageService } from './pages/transactions-page';
import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsTableModule } from '@shared/components/transactions-table';
import { TypefaceModule } from '@shared/directives/typeface';

@NgModule({
  imports: [
    CommonModule,
    InfoCardModule,
    NgxSkeletonLoaderModule,
    TransactionsRoutingModule,
    TransactionsTableModule,
    TypefaceModule,
  ],
  declarations: [
    TRANSACTION_COMPONENTS,
    TRANSACTIONS_PAGES,
  ],
  providers: [
    TransactionsPageService,
    TransactionDetailsService,
  ],
})
export class TransactionsModule {
}
