import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { StdTxMessageType, StdTxMessageValue } from 'decentr-js';

@Component({
  selector: 'app-ban-details',
  templateUrl: './ban-details.component.html',
  styleUrls: ['./ban-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BanDetailsComponent {
  @Input() public details: StdTxMessageValue<StdTxMessageType.OperationsBanAccount>;
}
