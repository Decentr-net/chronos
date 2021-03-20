import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoinRateFor24Hours, CurrencyService } from '@core/services/currency';

@Injectable()
export class DashboardPageService {
  constructor(
    private currencyService: CurrencyService,
  ) {
  }

  public getCoinRate(): Observable<CoinRateFor24Hours> {
    return this.currencyService.getDecentrCoinRateForUsd24hours();
  }

  public getDecentCoinRateHistory(days: number): Observable<any> {
    return this.currencyService.getDecentCoinRateHistory(days);
  }
}
