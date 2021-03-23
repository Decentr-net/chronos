import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionDetailsComponent } from './pages/transaction-details';
import { TransactionsPageComponent } from './pages/transactions-page';

const ROUTES: Routes = [
  {
    path: '',
    component: TransactionsPageComponent,
  },
  {
    path: ':transactionHash',
    component: TransactionDetailsComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
  ],
  exports: [
    RouterModule,
  ],
})
export class TransactionsRoutingModule {
}
