import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, mergeMap, pluck } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import { Transaction } from 'decentr-js';

import { TransactionsService } from '@core/services/transactions';
import { AppRoute } from '../../../app-route';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details-page.component.html',
  styleUrls: ['./transaction-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionDetailsPageComponent implements OnInit {
  public transactionDetails$: Observable<Transaction>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private transactionsService: TransactionsService,
  ) {
  }

  public ngOnInit(): void {
    this.transactionDetails$ = this.activatedRoute.params.pipe(
      pluck('transactionHash'),
      mergeMap((transactionHash) => this.transactionsService.getTransactionByHash(transactionHash)),
      catchError(() => {
        this.router.navigate(['/', AppRoute.Empty], {
          skipLocationChange: true,
          state: {
            title: 'Transaction not found',
          },
        });

        return EMPTY;
      })
    );
  }
}
