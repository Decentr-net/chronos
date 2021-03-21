import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { ONE_SECOND } from '@shared/utils/date';
import { switchMap } from 'rxjs/operators';
import { TransactionsPageService } from './transactions-page.service';
import { Transaction } from 'decentr-js';

@Component({
  selector: 'app-transactions-page',
  templateUrl: './transactions-page.component.html',
  styleUrls: ['./transactions-page.component.scss']
})
export class TransactionsPageComponent implements OnInit {
  transactions$: Observable<Transaction[]>;

  constructor(
    private transactionsPageService: TransactionsPageService,
  ) {
  }

  ngOnInit(): void {
    this.transactions$ = timer(0, ONE_SECOND * 10).pipe(
      switchMap(() => this.transactionsPageService.getLatestTxs()),
    );
  }

}
