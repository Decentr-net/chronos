import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Block, Transaction } from 'decentr-js';
import { EMPTY, Observable } from 'rxjs';
import { catchError, distinctUntilChanged, map, pluck, switchMap, tap } from 'rxjs/operators';
import { SvgIconRegistry } from '@ngneat/svg-icon';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { AppRoute } from '../../../app-route';
import { Breakpoint, BreakpointService } from '@shared/directives/breakpoint';
import { svgArrowLeftIcon } from '@shared/svg-icons/arrow-left';
import { svgExpandLeftIcon } from '@shared/svg-icons/expand-left';
import { svgExpandRightIcon } from '@shared/svg-icons/expand-right';
import { BlocksService } from '@core/services/blocks';
import { NetworkSelectorService } from '@core/services/network-selector';
import { svgCheckIcon } from '@shared/svg-icons/check';
import { svgLinkIcon } from '@shared/svg-icons/link';
import { TitleService } from '@core/services/title';

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

  public pageLink$: Observable<string>;
  public pageLinkIcon: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private blocksService: BlocksService,
    private breakpointService: BreakpointService,
    private changeDetectorRef: ChangeDetectorRef,
    private networkSelectorService: NetworkSelectorService,
    private router: Router,
    private svgIconRegistry: SvgIconRegistry,
    private titleService: TitleService,
  ) {
    svgIconRegistry.register([
      svgArrowLeftIcon,
      svgCheckIcon,
      svgExpandLeftIcon,
      svgExpandRightIcon,
      svgLinkIcon,
    ]);
  }

  public ngOnInit(): void {
    const height$ = this.activatedRoute.params.pipe(
      pluck('blockHeight'),
    );

    this.blockDetails$ = height$.pipe(
      switchMap((height) => this.blocksService.getBlockByHeight(height)),
      tap((height) => this.titleService.setTitle(`Block - ${height.block.header.height}`)),
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
      switchMap((height) => this.blocksService.getBlockTransactions(height)),
    );

    height$.pipe(
      switchMap((height) => this.blocksService.getLatestBlock().pipe(
        pluck('block', 'header', 'height'),
        map((latestBlockHeight) => [+latestBlockHeight, height]),
      )),
      untilDestroyed(this),
    ).subscribe(([latestBlockHeight, height]) => {
      this.nextBlockHeight = height === latestBlockHeight ? undefined : +height + 1;
      this.previousBlockHeight = height - 1 || undefined;

      this.changeDetectorRef.markForCheck();
    });

    this.pageLink$ = this.activatedRoute.params.pipe(
      distinctUntilChanged(),
      switchMap(() => this.networkSelectorService.getNetworkRelatedLink()),
      tap(() => this.pageLinkIcon = svgLinkIcon.name),
    );

    this.isTablet$ = this.breakpointService.observe(Breakpoint.Tablet);
  }

  public onPageLinkCopied(): void {
    this.pageLinkIcon = svgCheckIcon.name;
  }

  public onPageLinkLeave(): void {
    this.pageLinkIcon = svgLinkIcon.name;
  }
}
