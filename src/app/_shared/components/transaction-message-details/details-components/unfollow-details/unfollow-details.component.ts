import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { StdTxMessageType, StdTxMessageValue } from 'decentr-js';

@Component({
  selector: 'app-unfollow-details',
  templateUrl: './unfollow-details.component.html',
  styleUrls: ['./unfollow-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnfollowDetailsComponent {
  @Input() public details: StdTxMessageValue<StdTxMessageType.CommunityUnfollow>;
}
