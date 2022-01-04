import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TxMessageValue, TxMessageTypeUrl } from 'decentr-js';

@Component({
  selector: 'app-reset-account-details',
  templateUrl: './reset-account-details.component.html',
  styleUrls: ['./reset-account-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResetAccountDetailsComponent {
  @Input() public details : TxMessageValue<TxMessageTypeUrl.OperationsResetAccount>;
}
