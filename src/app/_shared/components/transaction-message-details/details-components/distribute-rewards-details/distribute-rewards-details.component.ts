import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { StdTxMessageType, StdTxMessageValue } from 'decentr-js';

@Component({
  selector: 'app-distribute-rewards-details',
  templateUrl: './distribute-rewards-details.component.html',
  styleUrls: ['./distribute-rewards-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DistributeRewardsDetailsComponent {
  @Input() public details: StdTxMessageValue<StdTxMessageType.OperationsDistributeRewards>;
}
