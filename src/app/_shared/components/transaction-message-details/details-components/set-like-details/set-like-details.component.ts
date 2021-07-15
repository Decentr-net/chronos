import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { StdTxMessageType, StdTxMessageValue } from 'decentr-js';

@Component({
  selector: 'app-set-like-details',
  templateUrl: './set-like-details.component.html',
  styleUrls: ['./set-like-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetLikeDetailsComponent {
  @Input() public details: StdTxMessageValue<StdTxMessageType.CommunitySetLike>;
}
