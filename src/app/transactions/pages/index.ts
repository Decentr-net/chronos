import { TransactionsPageComponent } from './transactions-page';
import { TransactionDetailsPageComponent } from './transaction-details-page';

export * from './transaction-details-page';
export * from './transactions-page';

export const TRANSACTIONS_PAGES = [
  TransactionsPageComponent,
  TransactionDetailsPageComponent,
];
