import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MessageTypes } from '../../enums/message-types.enum';

@Component({
  selector: 'app-transaction-message',
  templateUrl: './transaction-message.component.html',
  styleUrls: ['./transaction-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionMessageComponent {
  @Input() txMessage;
  public messageTypes: typeof MessageTypes = MessageTypes;
}
