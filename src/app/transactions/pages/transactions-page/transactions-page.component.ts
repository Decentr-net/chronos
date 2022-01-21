import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Breakpoint } from '@shared/directives/breakpoint';
import { TitleService } from '@core/services/title';
import { TxTableItem } from '@shared/components/transactions-table/transactions-table.component';

@Component({
  selector: 'app-transactions-page',
  templateUrl: './transactions-page.component.html',
  styleUrls: ['./transactions-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsPageComponent implements OnInit {
  public transactions$: Observable<TxTableItem[]>;

  public breakpoint: typeof Breakpoint = Breakpoint;

  constructor(
    private titleService: TitleService,
    // private transactionsService: TransactionsService,
  ) {
  }

  public ngOnInit(): void {
    this.titleService.setTitle('Transactions');

    // TODO: implement with offchain, implement TxTable map
    // this.transactions$ = this.transactionsService.getTransactionsLive(10, ONE_HOUR * 24);
  }
}
