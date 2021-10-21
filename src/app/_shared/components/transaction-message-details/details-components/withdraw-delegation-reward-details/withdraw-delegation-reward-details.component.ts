import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { StdTxMessageType, StdTxMessageValue } from 'decentr-js';

@Component({
  selector: 'app-withdraw-delegation-reward-details',
  templateUrl: './withdraw-delegation-reward-details.component.html',
  styleUrls: ['./withdraw-delegation-reward-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WithdrawDelegationRewardDetailsComponent {
  @Input() public details: StdTxMessageValue<StdTxMessageType.CosmosWithdrawDelegationReward>;
}
