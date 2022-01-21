import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TxMessageValue, TxMessageTypeUrl } from 'decentr-js';

@Component({
  selector: 'app-unjail-details',
  templateUrl: './unjail-details.component.html',
  styleUrls: ['./unjail-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnjailDetailsComponent {
  @Input() public details: TxMessageValue<TxMessageTypeUrl.SlashingUnjail>;
}
