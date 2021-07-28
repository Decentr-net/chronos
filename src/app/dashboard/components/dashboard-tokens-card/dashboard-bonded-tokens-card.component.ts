import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Pool, TotalSupply } from 'decentr-js';

@Component({
  selector: 'app-dashboard-bonded-tokens-card',
  templateUrl: './dashboard-bonded-tokens-card.component.html',
  styleUrls: ['./dashboard-bonded-tokens-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardBondedTokensCardComponent {
  @Input() public pool: Pool;
  @Input() public supply: TotalSupply['amount'];

  get getPoolTokenPercent(): number {
    return this.pool.bonded_tokens / +this.supply * 100;
  }
}
