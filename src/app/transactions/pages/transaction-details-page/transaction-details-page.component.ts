import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import { SvgIconRegistry } from '@ngneat/svg-icon';
import { DecodedIndexedTx } from 'decentr-js';

import { Breakpoint, BreakpointService } from '@shared/directives/breakpoint';
import { NetworkSelectorService } from '@core/services/network-selector';
import { TransactionsService } from '@core/services/transactions';
import { AppRoute } from '../../../app-route';
import { svgWarningIcon } from '@shared/svg-icons/warning';
import { TitleService } from '@core/services/title';
import { BlocksService } from '@core/services/blocks';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details-page.component.html',
  styleUrls: ['./transaction-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionDetailsPageComponent implements OnInit {
  public transactionDetails$: Observable<DecodedIndexedTx>;
  public blockTime$: Observable<string>;

  public readonly blocksRoute = AppRoute.Blocks;

  public isTablet$: Observable<boolean>;
  public breakpoint: typeof Breakpoint = Breakpoint;

  constructor(
    private activatedRoute: ActivatedRoute,
    private blocksService: BlocksService,
    private breakpointService: BreakpointService,
    private networkSelectorService: NetworkSelectorService,
    private router: Router,
    private svgIconRegistry: SvgIconRegistry,
    private titleService: TitleService,
    private transactionsService: TransactionsService,
  ) {
  }

  public ngOnInit(): void {
    this.svgIconRegistry.register([
      svgWarningIcon,
    ]);

    this.transactionDetails$ = this.activatedRoute.params.pipe(
      // TODO: temporary hotfix for https://github.com/osmosis-labs/osmosis-frontend/pull/273/files
      map(({ transactionHash }) => (transactionHash as string).replace(/\$/, '')),
      mergeMap((transactionHash) => this.transactionsService.getTransactionByHash(transactionHash)),
      tap((transactionHash) => this.titleService.setTitle(`Transaction - ${transactionHash.hash}`)),
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

    this.blockTime$ = this.transactionDetails$.pipe(
      switchMap((tx) => this.blocksService.getBlockByHeight(tx.height).pipe(
        map((block) => block.header.time),
      )),
    );

    this.isTablet$ = this.breakpointService.observe(Breakpoint.Tablet);
  }
}
