import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TxMessageValue, TxMessageTypeUrl } from 'decentr-js';

@Component({
  selector: 'app-follow-details',
  templateUrl: './follow-details.component.html',
  styleUrls: ['./follow-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FollowDetailsComponent {
  @Input() public details: TxMessageValue<TxMessageTypeUrl.CommunityFollow>;
}
