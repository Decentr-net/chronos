import { ChangeDetectionStrategy, Component, Input, TrackByFunction } from '@angular/core';
import { Transaction } from 'decentr-js';

import { AppRoute } from '../../../app-route';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsTableComponent {
  @Input() data: Transaction[];

  public appRoute: typeof AppRoute = AppRoute;
  public columns: string[] = ['Hash', 'Type', 'Height', 'Time'];

  public trackByHash: TrackByFunction<Transaction> = ({}, { txhash }) => txhash;
}
