import { ChangeDetectionStrategy, Component, Input, TrackByFunction } from '@angular/core';
import { Transaction } from 'decentr-js';

import { AppRoute } from '../../../app-route';
import { Breakpoint } from '@shared/directives/breakpoint';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsTableComponent {
  @Input() data: Transaction[] = [];

  public appRoute: typeof AppRoute = AppRoute;
  public breakpoint: typeof Breakpoint = Breakpoint;

  public trackByHash: TrackByFunction<Transaction> = ({}, { txhash }) => txhash;
}
