import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Block, Pool, Transaction } from 'decentr-js';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SvgIconRegistry } from '@ngneat/svg-icon';
import { UntilDestroy } from '@ngneat/until-destroy';

import { svgClockIcon } from '@shared/svg-icons/clock';
import { svgExpandRightIcon } from '@shared/svg-icons/expand-right';
import { CoinRateFor24Hours, CoinRateHistory } from '@core/services/currency';
import { AdvDdvStatistics } from '@core/services/statistics';
import { AppRoute } from '../../../app-route';
import { DashboardPageService } from './dashboard-page.service';

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
    this.advDdvStats$ = this.dashboardPageService.getAdvDdvStatistics();
    this.blocks$ = this.dashboardPageService.getBlocks();
    this.coinRate$ = this.dashboardPageService.getCoinRate();
    this.coinStats$ = this.dashboardPageService.getDecentCoinRateHistory(1);
    this.pool$ = this.dashboardPageService.getPool();

    this.latestBlock$ = this.blocks$.pipe(
      map((blocks) => blocks[0]),
    );

    this.transactions$ = this.dashboardPageService.getTransactions();
  }
}
