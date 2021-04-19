import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Block, Pool, Transaction } from 'decentr-js';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { SvgIconRegistry } from '@ngneat/svg-icon';
import { UntilDestroy } from '@ngneat/until-destroy';

import { AdvDdvStatistics } from '@core/services/statistics';
import { AppRoute } from '../../../app-route';
import { Breakpoint } from '@shared/directives/breakpoint';
import { CoinRateFor24Hours, CoinRateHistory } from '@core/services/currency';
import { DashboardPageService } from './dashboard-page.service';
import { svgClockIcon } from '@shared/svg-icons/clock';
import { svgExpandRightIcon } from '@shared/svg-icons/expand-right';

@UntilDestroy()
@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    DashboardPageService,
  ],
})
export class DashboardPageComponent implements OnInit {
  public advDdvStats$: Observable<AdvDdvStatistics>;
  public blocks$: Observable<Block[]>;
  public coinRate$: Observable<CoinRateFor24Hours>;
  public coinStats$: Observable<CoinRateHistory>;
  public latestBlock$: Observable<Block>;
  public pool$: Observable<Pool>;
  public transactions$: Observable<Transaction[]>;

  public readonly appRoute: typeof AppRoute = AppRoute;
  public breakpoint: typeof Breakpoint = Breakpoint;

  public blocksHashSize: Record<Breakpoint.Desktop | Breakpoint.Mobile | Breakpoint.Tablet, number> = {
    [Breakpoint.Desktop]: 25,
    [Breakpoint.Tablet]: 15,
    [Breakpoint.Mobile]: 9,
  };

  public transactionsHashSize: Record<Breakpoint.Desktop | Breakpoint.Mobile | Breakpoint.Tablet, number> = {
    [Breakpoint.Desktop]: 7,
    [Breakpoint.Tablet]: 9,
    [Breakpoint.Mobile]: 9,
  };

  constructor(
    private dashboardPageService: DashboardPageService,
    private svgIconRegistry: SvgIconRegistry,
  ) {
    svgIconRegistry.register([
      svgClockIcon,
      svgExpandRightIcon,
    ]);
  }

  public ngOnInit(): void {
    this.advDdvStats$ = this.dashboardPageService.getAdvDdvStatistics().pipe(
      share(),
    );

    this.blocks$ = this.dashboardPageService.getBlocks().pipe(
      share(),
    );

    this.coinRate$ = this.dashboardPageService.getCoinRate();
    this.coinStats$ = this.dashboardPageService.getDecentCoinRateHistory(1);
    this.pool$ = this.dashboardPageService.getPool();

    this.latestBlock$ = this.blocks$.pipe(
      map((blocks) => blocks[0]),
    );

    this.transactions$ = this.dashboardPageService.getTransactions();
  }
}
