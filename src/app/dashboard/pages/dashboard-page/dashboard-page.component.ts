import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Block, Coin, Pool } from 'decentr-js';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { SvgIconRegistry } from '@ngneat/svg-icon';
import { UntilDestroy } from '@ngneat/until-destroy';
import { AdvDdvStatistics } from 'decentr-js';

import { DdvChartStats, RegisteredUsers } from '@core/services/statistics';
import { AppRoute } from '../../../app-route';
import { Breakpoint } from '@shared/directives/breakpoint';
import { CoinRateFor24Hours, CoinRateHistory } from '@core/services/currency';
import { DashboardPageService } from './dashboard-page.service';
import { svgClockIcon } from '@shared/svg-icons/clock';
import { svgExpandRightIcon } from '@shared/svg-icons/expand-right';
import { TitleService } from '@core/services/title';

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
  public inflation$: Observable<string>;
  public latestBlock$: Observable<Block>;
  public pool$: Observable<Pool>;
  public ddvStatistics$: Observable<DdvChartStats>;
  public registeredUsersStats$: Observable<RegisteredUsers>;
  public supply$: Observable<Coin>;
  // TODO: implement with offchain
  // public transactions$: Observable<DecodedIndexedTx[]>;

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
    private titleService: TitleService,
  ) {
    svgIconRegistry.register([
      svgClockIcon,
      svgExpandRightIcon,
    ]);
  }

  public ngOnInit(): void {
    this.titleService.setTitle();

    this.advDdvStats$ = this.dashboardPageService.getAdvDdvStatistics().pipe(
      share(),
    );

    this.blocks$ = this.dashboardPageService.getBlocks().pipe(
      share(),
    );

    this.coinRate$ = this.dashboardPageService.getCoinRate();
    this.coinStats$ = this.dashboardPageService.getDecentCoinRateHistory(1);
    this.inflation$ = this.dashboardPageService.getInflation();
    this.pool$ = this.dashboardPageService.getPool();
    this.registeredUsersStats$ = this.dashboardPageService.getRegisteredUsersStatistics();
    this.ddvStatistics$ = this.dashboardPageService.getDdvStatistics();

    this.supply$ = this.dashboardPageService.getCoinSupply('udec');

    this.latestBlock$ = this.dashboardPageService.getLatestBlock();

    // TODO: implement with offchain
    // this.transactions$ = this.dashboardPageService.getTransactions();
  }
}
