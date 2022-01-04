import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TxMessageValue, TxMessageTypeUrl } from 'decentr-js';

@Component({
  selector: 'app-fund-community-pool-details',
  templateUrl: './fund-community-pool-details.component.html',
  styleUrls: ['./fund-community-pool-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FundCommunityPoolDetailsComponent {
  @Input() public details: TxMessageValue<TxMessageTypeUrl.DistributionFundCommunityPool>;
}
