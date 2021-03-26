import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { InfoCardModule } from '@shared/components/info-card';
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
