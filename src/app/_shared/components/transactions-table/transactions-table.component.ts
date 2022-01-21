import { ChangeDetectionStrategy, Component, Input, TrackByFunction } from '@angular/core';
import { DecodedIndexedTx, TxMessageTypeUrl } from 'decentr-js';
import { SvgIconRegistry } from '@ngneat/svg-icon';

import { AppRoute } from '../../../app-route';
import { Breakpoint } from '@shared/directives/breakpoint';
import { svgWarningIcon } from '@shared/svg-icons/warning';

export interface TxTableItem {
  code: DecodedIndexedTx['code'];
  hash: DecodedIndexedTx['hash'];
  height: DecodedIndexedTx['height'];
  messageType: TxMessageTypeUrl;
  timestamp: string;
}

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsTableComponent {
  @Input() data: TxTableItem[] = [];
  @Input() hashSize: Record<Breakpoint.Desktop | Breakpoint.Mobile | Breakpoint.Tablet, number> = {
    [Breakpoint.Desktop]: 25,
    [Breakpoint.Tablet]: 15,
    [Breakpoint.Mobile]: 9,
  };
  @Input() shrinkBreakpoint: Breakpoint = Breakpoint.Tablet;

  public appRoute: typeof AppRoute = AppRoute;
  public breakpoint: typeof Breakpoint = Breakpoint;

  public trackByHash: TrackByFunction<TxTableItem> = ({}, { hash }) => hash;

  constructor(
    svgIconRegistry: SvgIconRegistry,
  ) {
    svgIconRegistry.register([
      svgWarningIcon,
    ]);
  }
}
