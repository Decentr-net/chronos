import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Coin, Pool } from 'decentr-js';

@Component({
  selector: 'app-dashboard-bonded-tokens-card',
  templateUrl: './dashboard-bonded-tokens-card.component.html',
  styleUrls: ['./dashboard-bonded-tokens-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardBondedTokensCardComponent {
  @Input() public pool: Pool;

  @Input() public supply: Coin;

  get getPoolTokenPercent(): number {
    return +this.pool.bondedTokens / +this.supply.amount * 100;
  }
}
