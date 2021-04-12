import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { StdTxMessageType, StdTxMessageValue } from 'decentr-js';

@Component({
  selector: 'app-set-private-details',
  templateUrl: './set-private-details.component.html',
  styleUrls: ['./set-private-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetPrivateDetailsComponent {
  @Input() public details: StdTxMessageValue<StdTxMessageType.ProfileSetPrivate>;
}
