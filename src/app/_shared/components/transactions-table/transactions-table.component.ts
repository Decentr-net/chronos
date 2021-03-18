import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Transaction } from 'decentr-js';
import { AppRoute } from '../../../app-route';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsTableComponent {
  @Input() data: Transaction[] = [];
  columns: string[] = ['Tx hash', 'Type', 'Time'];

  getTransactionDetailsLink(txHash: string): string[] {
    return [`/${AppRoute.Transactions}`, txHash];
  }
}
