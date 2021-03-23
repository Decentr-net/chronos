import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Transaction } from 'decentr-js';

import { TransactionDetailsService } from './transaction-details.service';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionDetailsComponent implements OnInit {
  @HostBinding('class.container') public readonly useContainerClass: boolean = true;

  public transactionDetails$: Observable<Transaction>;

  constructor(
    private route: ActivatedRoute,
    private transactionDetailsService: TransactionDetailsService,
  ) {
  }

  public ngOnInit(): void {
    this.transactionDetails$ = this.route.params.pipe(
      mergeMap((params) => this.transactionDetailsService.getTransaction(params.transactionHash)),
    );
  }
}
