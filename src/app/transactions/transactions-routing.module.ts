import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionsPageComponent } from './pages/transactions-page';
import { TransactionDetailsComponent } from './pages/transaction-details';

const routes: Routes = [
  {
    path: '',
    component: TransactionsPageComponent,
  },
  {
    path: ':transactionHash',
    component: TransactionDetailsComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class TransactionsRoutingModule { }
