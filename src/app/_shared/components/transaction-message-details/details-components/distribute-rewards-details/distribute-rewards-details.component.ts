import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TxMessageValue, TxMessageTypeUrl, correctDecodedFloatNumber } from 'decentr-js';

interface DistributedReward {
  amount: number;
  owner: string;
  receiver: string;
}

@Component({
  selector: 'app-distribute-rewards-details',
  templateUrl: './distribute-rewards-details.component.html',
  styleUrls: ['./distribute-rewards-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DistributeRewardsDetailsComponent implements OnInit {
  @Input() public details: TxMessageValue<TxMessageTypeUrl.OperationsDistributeRewards>;

  public rewards: DistributedReward[];

  public ngOnInit(): void {
    this.rewards = this.details.rewards.map((reward) => ({
      amount: +correctDecodedFloatNumber(reward.reward.dec) * 1000000,
      owner: this.details.owner,
      receiver: reward.receiver,
    }));
  }
}
