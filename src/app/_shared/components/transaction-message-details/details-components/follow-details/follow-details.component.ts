import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { StdTxMessageType, StdTxMessageValue } from 'decentr-js';

@Component({
  selector: 'app-follow-details',
  templateUrl: './follow-details.component.html',
  styleUrls: ['./follow-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FollowDetailsComponent {
  @Input() public details: StdTxMessageValue<StdTxMessageType.CommunityFollow>;
}
