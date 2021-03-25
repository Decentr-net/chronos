import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Block, Transaction } from 'decentr-js';
import { Observable } from 'rxjs';
import { map, pluck, switchMap } from 'rxjs/operators';

import { BlocksService } from '@core/services/blocks';
import { TransactionsService } from '@core/services/transactions';

@Component({
  selector: 'app-block-details-page',
  templateUrl: './block-details-page.component.html',
  styleUrls: ['./block-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlockDetailsPageComponent implements OnInit {
  public blockDetails$: Observable<Block>;
  public blockTxs$: Observable<Transaction[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private blocksService: BlocksService,
    private transactionsService: TransactionsService,
  ) {
  }

  public ngOnInit(): void {
    const height$ = this.activatedRoute.params.pipe(
      pluck('blockHeight'),
    );

    this.blockDetails$ = height$.pipe(
      switchMap((height) => this.blocksService.getBlockByHeight(height),
    ));

    this.blockTxs$ = height$.pipe(
      switchMap((height) => this.transactionsService.searchTransactions({ txMinHeight: height, txMaxHeight: height })),
      map((transactions) => transactions.txs),
    );
  }
}
