import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from 'decentr-js';

import { ONE_SECOND } from '@shared/utils/date';
import { TransactionsService } from '@core/services/transactions';

@Component({
  selector: 'app-transactions-page',
  templateUrl: './transactions-page.component.html',
  styleUrls: ['./transactions-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsPageComponent implements OnInit {
  public transactions$: Observable<Transaction[]>;

  constructor(
    private transactionsService: TransactionsService,
  ) {
  }

  public ngOnInit(): void {
    this.transactions$ = this.transactionsService.getTransactionsLive(50, ONE_SECOND * 10);
  }
}
