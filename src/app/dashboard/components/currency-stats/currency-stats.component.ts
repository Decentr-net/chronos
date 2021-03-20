import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CoinRateFor24Hours } from '@core/services/currency';

interface CoinStatsProvider {
  name: string;
  url: string;
}

const COIN_STATS_PROVIDER: CoinStatsProvider = {
  name: 'Coingecko',
  url: 'https://www.coingecko.com/en/coins/decentr',
};

@Component({
  selector: 'app-currency-stats',
  templateUrl: './currency-stats.component.html',
  styleUrls: ['./currency-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyStatsComponent {
  @Input() public coinRate: CoinRateFor24Hours;
  @Input() public coinStats: any;

  public coinStatsProvider: CoinStatsProvider = COIN_STATS_PROVIDER;
}
