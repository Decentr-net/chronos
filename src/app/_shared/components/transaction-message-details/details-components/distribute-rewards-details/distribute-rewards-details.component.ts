import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TxMessageValue, TxMessageTypeUrl, correctDecodedFloatNumber } from 'decentr-js';

@Component({
  selector: 'app-distribute-rewards-details',
  templateUrl: './distribute-rewards-details.component.html',
  styleUrls: ['./distribute-rewards-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DistributeRewardsDetailsComponent implements OnInit {
  @Input() public details: TxMessageValue<TxMessageTypeUrl.OperationsDistributeRewards>;
  public amount: number;

  public ngOnInit(): void {
    this.amount = +correctDecodedFloatNumber(this.details.rewards[0].reward.dec) * 1000000;
  }
}
