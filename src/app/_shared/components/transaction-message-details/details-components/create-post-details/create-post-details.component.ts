import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TxMessageValue, TxMessageTypeUrl } from 'decentr-js';

@Component({
  selector: 'app-create-post-details',
  templateUrl: './create-post-details.component.html',
  styleUrls: ['./create-post-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreatePostDetailsComponent {
  @Input() public details: TxMessageValue<TxMessageTypeUrl.CommunityCreatePost>;
}
