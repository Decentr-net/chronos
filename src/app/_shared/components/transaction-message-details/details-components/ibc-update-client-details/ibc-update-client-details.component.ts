import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TxMessageTypeUrl, TxMessageValue } from 'decentr-js';

@Component({
  selector: 'app-ibc-update-client-details',
  templateUrl: './ibc-update-client-details.component.html',
  styleUrls: ['./ibc-update-client-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IbcUpdateClientDetailsComponent {
  @Input() public details: TxMessageValue<TxMessageTypeUrl.IbcMsgUpdateClient>;
}
