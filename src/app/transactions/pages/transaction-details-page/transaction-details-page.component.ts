import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, distinctUntilChanged, map, mergeMap, pluck, switchMap, tap } from 'rxjs/operators';
import { BehaviorSubject, EMPTY, Observable } from 'rxjs';
import { SvgIconRegistry } from '@ngneat/svg-icon';
import { Transaction } from 'decentr-js';

import { Breakpoint, BreakpointService } from '@shared/directives/breakpoint';
import { svgLinkIcon } from '@shared/svg-icons/link';
import { NetworkSelectorService } from '@core/services/network-selector';
import { TransactionsService } from '@core/services/transactions';
import { AppRoute } from '../../../app-route';
import { svgCheckIcon } from '@shared/svg-icons/check';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details-page.component.html',
  styleUrls: ['./transaction-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionDetailsPageComponent implements OnInit {
  public transactionDetails$: Observable<Transaction>;

  public readonly blocksRoute = AppRoute.Blocks;

  public isTablet$: Observable<boolean>;
  public breakpoint: typeof Breakpoint = Breakpoint;
  public pageLink$: Observable<string>;
  public pageLinkIcon$: Observable<string>;

  private pageLinkCopied: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private activatedRoute: ActivatedRoute,
    private breakpointService: BreakpointService,
    private networkSelectorService: NetworkSelectorService,
    private router: Router,
    private svgIconRegistry: SvgIconRegistry,
    private transactionsService: TransactionsService,
  ) {
    svgIconRegistry.register([
      svgCheckIcon,
      svgLinkIcon,
    ]);
  }

  public ngOnInit(): void {
    this.transactionDetails$ = this.activatedRoute.params.pipe(
      pluck('transactionHash'),
      mergeMap((transactionHash) => this.transactionsService.getTransactionByHash(transactionHash)),
      catchError(() => {
        this.router.navigate(['/', AppRoute.Empty], {
          skipLocationChange: true,
          state: {
            title: 'Transaction not found',
          },
        });

        return EMPTY;
      }),
    );

    this.pageLink$ = this.activatedRoute.params.pipe(
      distinctUntilChanged(),
      switchMap(() => this.networkSelectorService.getNetworkRelatedLink()),
      tap(() => this.pageLinkCopied.next(false)),
    );

    this.isTablet$ = this.breakpointService.observe(Breakpoint.Tablet);

    this.pageLinkIcon$ = this.pageLinkCopied.pipe(
      map((copied) => copied ? svgCheckIcon.name : svgLinkIcon.name),
    );
  }

  public onPageLinkCopied(): void {
    this.pageLinkCopied.next(true);
  }
}
