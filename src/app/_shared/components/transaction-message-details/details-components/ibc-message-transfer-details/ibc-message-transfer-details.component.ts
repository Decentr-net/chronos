import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TxMessageTypeUrl, TxMessageValue } from 'decentr-js';
import { Observable } from 'rxjs';

import { Breakpoint, BreakpointService } from '@shared/directives/breakpoint';

@Component({
  selector: 'app-ibc-message-transfer-details',
  templateUrl: './ibc-message-transfer-details.component.html',
  styleUrls: ['./ibc-message-transfer-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IbcMessageTransferDetailsComponent implements OnInit {
  @Input() public details: TxMessageValue<TxMessageTypeUrl.IbcMsgTransfer>;

  public isTablet$: Observable<boolean>;

  constructor(
    private breakpointService: BreakpointService,
  ) {
  }

  public ngOnInit(): void {
    this.isTablet$ = this.breakpointService.observe(Breakpoint.Tablet);
  }
}
