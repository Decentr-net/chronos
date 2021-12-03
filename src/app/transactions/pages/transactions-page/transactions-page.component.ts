import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from 'decentr-js';

import { Breakpoint } from '@shared/directives/breakpoint';
import { ONE_HOUR } from '@shared/utils/date';
import { TitleService } from '@core/services/title';
import { TransactionsService } from '@core/services/transactions';

@Component({
  selector: 'app-transactions-page',
  templateUrl: './transactions-page.component.html',
  styleUrls: ['./transactions-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsPageComponent implements OnInit {
  public transactions$: Observable<Transaction[]>;

  public breakpoint: typeof Breakpoint = Breakpoint;

  constructor(
    private titleService: TitleService,
    private transactionsService: TransactionsService,
  ) {
  }

  public ngOnInit(): void {
    this.titleService.setTitle('Transactions');

    this.transactions$ = this.transactionsService.getTransactionsLive(10, ONE_HOUR * 24);
  }
}
