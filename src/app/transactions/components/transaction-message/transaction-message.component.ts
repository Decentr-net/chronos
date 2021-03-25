import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { StdTxMessage } from 'decentr-js';

import { MessageType } from '../../enums/message-type.enum';

@Component({
  selector: 'app-transaction-message',
  templateUrl: './transaction-message.component.html',
  styleUrls: ['./transaction-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionMessageComponent {
  @Input() txMessage: StdTxMessage<MessageType, any>;

  public messageTypes: typeof MessageType = MessageType;
}
