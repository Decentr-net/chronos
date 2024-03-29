import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { ButtonBackModule } from '@shared/components/button-back';
import { CurrencySymbolModule } from '@shared/pipes/currency-symbol';
import { DetailsTableModule } from '@shared/components/details-table';
import { InfoCardModule } from '@shared/components/info-card';
import { NumberFormatModule } from '@shared/pipes/number-format';
import { PageLinkModule } from '@shared/components/page-link';
import { TransactionMessageDetailsModule } from '@shared/components/transaction-message-details';
import { TransactionMessageTypeIconModule } from '@shared/components/transaction-message-type-icon';
import { TransactionsTableModule } from '@shared/components/transactions-table';
import { TxMessageTypeLabelModule } from '@shared/pipes/tx-message-type-label';
import { TypefaceModule } from '@shared/directives/typeface';
import { TransactionsRoutingModule } from './transactions-routing.module';
import { TRANSACTION_COMPONENTS } from './components';
import { TRANSACTIONS_PAGES } from './pages';

@NgModule({
  imports: [
    ButtonBackModule,
    CommonModule,
    CurrencySymbolModule,
    DetailsTableModule,
    InfoCardModule,
    NgxSkeletonLoaderModule,
    NumberFormatModule,
    PageLinkModule,
    TransactionMessageDetailsModule,
    TransactionMessageTypeIconModule,
    TransactionsRoutingModule,
    TransactionsTableModule,
    TxMessageTypeLabelModule,
    TypefaceModule,
    SvgIconsModule,
  ],
  declarations: [
    TRANSACTION_COMPONENTS,
    TRANSACTIONS_PAGES,
  ],
})
export class TransactionsModule {
}
