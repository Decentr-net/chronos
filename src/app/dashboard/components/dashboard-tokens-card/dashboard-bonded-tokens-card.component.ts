import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Pool } from 'decentr-js';

@Component({
  selector: 'app-dashboard-bonded-tokens-card',
  templateUrl: './dashboard-bonded-tokens-card.component.html',
  styleUrls: ['./dashboard-bonded-tokens-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardBondedTokensCardComponent {
  @Input() public pool: Pool;

  get getPoolTokenPercent(): number {
    return this.pool.not_bonded_tokens / this.pool.bonded_tokens * 100;
  }
}
