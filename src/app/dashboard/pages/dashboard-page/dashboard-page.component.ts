import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Block, Pool, Transaction } from 'decentr-js';
import { Observable, timer } from 'rxjs';
import { share, switchMap } from 'rxjs/operators';
import { SvgIconRegistry } from '@ngneat/svg-icon';
import { UntilDestroy } from '@ngneat/until-destroy';

import { AppRoute } from '../../../app-route';
import { CoinRateFor24Hours, CoinRateHistory } from '@core/services/currency';
import { DashboardPageService } from './dashboard-page.service';
import { DecentrService } from '@core/services/decentr';
import { ONE_SECOND } from '@shared/utils/date';
import { svgClockIcon } from '../../../svg-icons/clock';
import { svgExpandRightIcon } from '../../../svg-icons/expand-right';

@UntilDestroy()
@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPageComponent implements OnInit {
  public readonly appRoute: typeof AppRoute = AppRoute;
  public blocks$: Observable<Block[]>;
  public coinRate$: Observable<CoinRateFor24Hours>;
  public coinStats$: Observable<CoinRateHistory>;
  public pool$: Observable<Pool>;
  public transactions$: Observable<Transaction[]>;

  constructor(
    private dashboardService: DashboardPageService,
    private decentrService: DecentrService,
    private svgIconRegistry: SvgIconRegistry,
  ) {
    svgIconRegistry.register([
      svgClockIcon,
      svgExpandRightIcon,
    ]);
  }

  public ngOnInit(): void {
    this.coinRate$ = this.dashboardService.getCoinRate();
    this.coinStats$ = this.dashboardService.getDecentCoinRateHistory(1);
    this.pool$ = this.dashboardService.getPool();

    this.blocks$ = timer(0, ONE_SECOND * 10).pipe(
      switchMap(() => this.dashboardService.getBlocks(5)),
      share(),
    );

    this.transactions$ = timer(0, ONE_SECOND * 10).pipe(
      switchMap(() => this.dashboardService.getLatestTxs()),
    );
  }
}
