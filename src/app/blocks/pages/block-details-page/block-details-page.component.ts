import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Block, Transaction } from 'decentr-js';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map, pluck, switchMap } from 'rxjs/operators';

import { BlocksService } from '@core/services/blocks';
import { TransactionsService } from '@core/services/transactions';
import { AppRoute } from '../../../app-route';
import { Breakpoint, BreakpointService } from '@shared/directives/breakpoint';
import { SvgIconRegistry } from '@ngneat/svg-icon';
import { svgArrowLeftIcon } from '@shared/svg-icons/arrow-left';

@Component({
  selector: 'app-block-details-page',
  templateUrl: './block-details-page.component.html',
  styleUrls: ['./block-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlockDetailsPageComponent implements OnInit {
  public blockDetails$: Observable<Block>;
  public blockTxs$: Observable<Transaction[]>;

  public isMobile$: Observable<boolean>;
  public isTablet$: Observable<boolean>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private blocksService: BlocksService,
    private breakpointService: BreakpointService,
    private router: Router,
    private svgIconRegistry: SvgIconRegistry,
    private transactionsService: TransactionsService,
  ) {
    svgIconRegistry.register(svgArrowLeftIcon);
  }

  public ngOnInit(): void {
    const height$ = this.activatedRoute.params.pipe(
      pluck('blockHeight'),
    );

    this.blockDetails$ = height$.pipe(
      switchMap((height) => this.blocksService.getBlockByHeight(height)),
      catchError(() => {
        this.router.navigate(['/', AppRoute.Empty], {
          skipLocationChange: true,
          state: {
            title: 'Block not found',
          },
        });

        return EMPTY;
      }),
    );

    this.blockTxs$ = height$.pipe(
      switchMap((height) => this.transactionsService.searchTransactions({ txMinHeight: height, txMaxHeight: height })),
      map((transactions) => transactions.txs),
      catchError(() => EMPTY),
    );

    this.isMobile$ = this.breakpointService.observe(Breakpoint.Mobile);
    this.isTablet$ = this.breakpointService.observe(Breakpoint.Tablet);
  }
}
