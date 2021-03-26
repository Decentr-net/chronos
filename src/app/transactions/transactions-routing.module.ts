import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionDetailsPageComponent, TransactionsPageComponent } from './pages';

const ROUTES: Routes = [
  {
    path: '',
    component: TransactionsPageComponent,
  },
  {
    path: ':transactionHash',
    component: TransactionDetailsPageComponent,
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
