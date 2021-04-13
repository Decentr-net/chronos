import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { StdTxMessageType, StdTxMessageValue } from 'decentr-js';

@Component({
  selector: 'app-set-public-details',
  templateUrl: './set-public-details.component.html',
  styleUrls: ['./set-public-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetPublicDetailsComponent {
  @Input() public details: StdTxMessageValue<StdTxMessageType.ProfileSetPublic>;
}
