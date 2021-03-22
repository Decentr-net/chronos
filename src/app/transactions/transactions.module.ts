import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { TRANSACTIONS_PAGES } from './pages';
import { InfoCardModule } from '@shared/components/info-card';
import { TransactionsTableModule } from '@shared/components/transactions-table';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { TransactionsPageService } from './pages/transactions-page';
import { TransactionDetailsService } from './pages/transaction-details';
import { TypefaceModule } from '@shared/directives/typeface';
import { TRANSACTION_COMPONENTS } from './components';


@NgModule({
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    InfoCardModule,
    TransactionsTableModule,
    NgxSkeletonLoaderModule,
    TypefaceModule
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
