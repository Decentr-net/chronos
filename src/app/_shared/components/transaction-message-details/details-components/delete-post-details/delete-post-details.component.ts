import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { StdTxMessageType, StdTxMessageValue } from 'decentr-js';

@Component({
  selector: 'app-delete-post-details',
  templateUrl: './delete-post-details.component.html',
  styleUrls: ['./delete-post-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeletePostDetailsComponent {
  @Input() public details: StdTxMessageValue<StdTxMessageType.CommunityDeletePost>;
}
