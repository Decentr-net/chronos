import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TypedEncodeObject } from 'decentr-js';

@Component({
  selector: 'app-transaction-message',
  templateUrl: './transaction-message.component.html',
  styleUrls: ['./transaction-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionMessageComponent {
  @Input() txMessage: TypedEncodeObject;
}
