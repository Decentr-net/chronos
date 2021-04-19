import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Block, Transaction } from 'decentr-js';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map, pluck, switchMap } from 'rxjs/operators';
import { SvgIconRegistry } from '@ngneat/svg-icon';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { Breakpoint, BreakpointService } from '@shared/directives/breakpoint';
import { svgArrowLeftIcon } from '@shared/svg-icons/arrow-left';
import { svgExpandLeftIcon } from '@shared/svg-icons/expand-left';
import { svgExpandRightIcon } from '@shared/svg-icons/expand-right';
import { BlocksService } from '@core/services/blocks';
import { TransactionsService } from '@core/services/transactions';
import { AppRoute } from '../../../app-route';

@UntilDestroy()
@Component({
  selector: 'app-block-details-page',
  templateUrl: './block-details-page.component.html',
  styleUrls: ['./block-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlockDetailsPageComponent implements OnInit {
  public blockDetails$: Observable<Block>;
  public blockTxs$: Observable<Transaction[]>;

  public nextBlockHeight: number;
  public previousBlockHeight: number;

  public isTablet$: Observable<boolean>;
  public breakpoint: typeof Breakpoint = Breakpoint;

  constructor(
    private activatedRoute: ActivatedRoute,
    private blocksService: BlocksService,
    private breakpointService: BreakpointService,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router,
    private svgIconRegistry: SvgIconRegistry,
    private transactionsService: TransactionsService,
  ) {
    svgIconRegistry.register([
      svgArrowLeftIcon,
      svgExpandLeftIcon,
      svgExpandRightIcon,
    ]);
  }

  public ngOnInit(): void {
    const height$ = this.activatedRoute.params.pipe(
      pluck('blockHeight'),
      map((blockHeight) => +blockHeight),
    );

    this.blockDetails$ = height$.pipe(
      switchMap((height) => this.blocksService.getBlockByHeight(height.toString())),
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

    height$.pipe(
      switchMap((height) => this.blocksService.getLatestBlock().pipe(
        pluck('block', 'header', 'height'),
        map((latestBlockHeight) => [+latestBlockHeight, height]),
      )),
      untilDestroyed(this),
    ).subscribe(([latestBlockHeight, height]) => {
      this.nextBlockHeight = height === latestBlockHeight ? undefined : height + 1;
      this.previousBlockHeight = height - 1 || undefined;

      this.changeDetectorRef.markForCheck();
    });

    this.isTablet$ = this.breakpointService.observe(Breakpoint.Tablet);
  }
}
