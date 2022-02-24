import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TxMessageTypeUrl, TxMessageValue } from 'decentr-js';

@Component({
  selector: 'app-ibc-acknowledgement-details',
  templateUrl: './ibc-acknowledgement-details.component.html',
  styleUrls: ['./ibc-acknowledgement-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IbcAcknowledgementDetailsComponent {
  @Input() public details: TxMessageValue<TxMessageTypeUrl.IbcMsgAcknowledgement>;
}
