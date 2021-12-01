import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { CHART_TOOLTIP } from '../chart';
import { CoinRateFor24Hours, CoinRateHistory } from '@core/services/currency';
import { CurrencyChartTooltipComponent } from './currency-chart-tooltip';

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
  providers: [
    {
      provide: CHART_TOOLTIP,
      useValue: CurrencyChartTooltipComponent,
    },
  ],
})
export class CurrencyStatsComponent {
  @Input() public coinRate: CoinRateFor24Hours;
  @Input() public coinStats: CoinRateHistory;

  public coinStatsProvider: CoinStatsProvider = COIN_STATS_PROVIDER;
}
