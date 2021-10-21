import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { StdTxMessageType, StdTxMessageValue } from 'decentr-js';

@Component({
  selector: 'app-fund-community-pool-details',
  templateUrl: './fund-community-pool-details.component.html',
  styleUrls: ['./fund-community-pool-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FundCommunityPoolDetailsComponent {
  @Input() public details: StdTxMessageValue<StdTxMessageType.CosmosFundCommunityPool>;
}
