import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { forkJoin, Observable, timer } from 'rxjs';
import { distinctUntilChanged, map, mergeMap, scan, switchMap } from 'rxjs/operators';
import { Transaction } from 'decentr-js';

import { ONE_SECOND } from '@shared/utils/date';
import { TransactionsPageService } from './transactions-page.service';

const COUNT_TO_DISPLAY = 50;
const UPDATE_PERIOD = ONE_SECOND * 10;

@Component({
  selector: 'app-transactions-page',
  templateUrl: './transactions-page.component.html',
  styleUrls: ['./transactions-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsPageComponent implements OnInit {
  @HostBinding('class.container') public readonly useContainerClass: boolean = true;

  transactions$: Observable<Transaction[]>;

  constructor(
    private transactionsPageService: TransactionsPageService,
  ) {
  }

  public ngOnInit(): void {
    this.transactions$ = timer(0, UPDATE_PERIOD).pipe(
      switchMap(() => this.transactionsPageService.getTxs({ limit: 1, txMinHeight: 0 })),
      map((response) => +response.page_total),
      distinctUntilChanged(),
      scan((acc, totalCount) => ({
        totalCount,
        new: (totalCount - (acc.totalCount || totalCount)) || COUNT_TO_DISPLAY,
      }), { new: 0, totalCount: 0 }),
      mergeMap((updateInfo) => {
        return forkJoin(new Array(updateInfo.new)
          .fill(null)
          .map((_, index) => this.transactionsPageService.getTxs({
            limit: 1,
            page: updateInfo.totalCount - index,
            txMinHeight: 0,
          })));
      }),
      scan((acc, newTransactions) => [...newTransactions, ...acc].slice(0, COUNT_TO_DISPLAY), []),
      map((transactions) => transactions.reduce((acc, item) => [...acc, ...item.txs], [])),
    );
  }
}
