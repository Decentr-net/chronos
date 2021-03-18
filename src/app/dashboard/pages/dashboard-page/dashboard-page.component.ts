import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CurrencyService } from '@core/services/currency';
import { DecentrService } from '@core/services/decentr';
import { Block, BlockHeader, Pool, Transaction } from 'decentr-js';
import { AppRoute } from '../../../app-route';
import { Observable, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPageComponent implements OnInit {

  constructor(
    private currencyService: CurrencyService,
    private decentrService: DecentrService,
  ) {
  }

  AppRoute = AppRoute;
  stats$: Observable<any>;
  pool$: Observable<Pool>;
  latestBlock$: Observable<Pick<BlockHeader, 'height' | 'time'>>;
  transactions$: Observable<Transaction[]>;
  blocks$: Observable<Block[]>;

  ngOnInit(): void {
    this.stats$ = this.currencyService.getDecentCoinRateHistory(1);

    this.pool$ = this.decentrService.getPool();

    this.blocks$ = this.decentrService.getLatestBlock().pipe(
      switchMap(blockResponse => this.decentrService.getBlocks(blockResponse.height, 5)
        .pipe(
          map(block => block.sort(this.sortByHeight))
        )
      )
    );

    this.latestBlock$ = timer(0, 3000).pipe(
      switchMap(() => this.decentrService.getLatestBlock()),
    );

    this.transactions$ = this.decentrService.getTxs({ txMinHeight: 0, limit: 1 }).pipe(
      switchMap(txsResponse => this.decentrService.getLatestTxs(5, txsResponse.page_total)
        .pipe(
          map(tx => tx.sort(this.sortByHeight)),
        )
      )
    );
  }

  sortByHeight(a, b): any {
    return a.height < b.height ? 1 : -1;
  }
}
