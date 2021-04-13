import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { StdTxMessageType, StdTxMessageValue } from 'decentr-js';

@Component({
  selector: 'app-send-details',
  templateUrl: './send-details.component.html',
  styleUrls: ['./send-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SendDetailsComponent {
  @Input() public details: StdTxMessageValue<StdTxMessageType.CosmosSend>;
}
