import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TxMessageValue, TxMessageTypeUrl } from 'decentr-js';

@Component({
  selector: 'app-mint-details',
  templateUrl: './mint-details.component.html',
  styleUrls: ['./mint-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MintDetailsComponent {
  @Input() public details: TxMessageValue<TxMessageTypeUrl.OperationsMint>;
}
