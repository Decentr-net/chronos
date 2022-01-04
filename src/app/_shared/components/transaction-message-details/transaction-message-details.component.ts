import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TxMessageTypeUrl, TypedEncodeObject } from 'decentr-js';

@Component({
  selector: 'app-transaction-message-details',
  templateUrl: './transaction-message-details.component.html',
  styleUrls: ['./transaction-message-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionMessageDetailsComponent {
  @Input() public message: TypedEncodeObject;

  public readonly messageType: typeof TxMessageTypeUrl = TxMessageTypeUrl;
}
