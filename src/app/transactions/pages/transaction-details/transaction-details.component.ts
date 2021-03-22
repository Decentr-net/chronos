import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { TransactionDetailsService } from './transaction-details.service';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from 'decentr-js';
import { Observable } from 'rxjs';

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
    private transactionDetailsService: TransactionDetailsService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.transactionDetails$ = this.route.params.pipe(
      mergeMap((params) => this.transactionDetailsService.getTransaction(params.transactionHash)),
    );
  }

}
