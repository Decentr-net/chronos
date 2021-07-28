import { Injectable } from '@angular/core';
import { Block, Pool, TotalSupply, Transaction } from 'decentr-js';
import { Observable } from 'rxjs';

import { ONE_SECOND } from '@shared/utils/date';
import { BlocksService } from '@core/services/blocks';
import { CoinRateFor24Hours, CoinRateHistory, CurrencyService } from '@core/services/currency';
import { StakingService } from '@core/services/staking';
import { AdvDdvStatistics, StatisticsService } from '@core/services/statistics';
import { TransactionsService } from '@core/services/transactions';

@Injectable()
export class DashboardPageService {
  constructor(
    private blocksService: BlocksService,
    private currencyService: CurrencyService,
    private stakingService: StakingService,
    private statisticsService: StatisticsService,
    private transactionsService: TransactionsService,
  ) {
  }

  public getAdvDdvStatistics(): Observable<AdvDdvStatistics> {
    return this.statisticsService.getAdvDdvStatistics();
  }

  public getCoinSupply(coinName: string): Observable<TotalSupply['amount']> {
    return this.stakingService.getCoinSupply(coinName);
  }

  public getCoinRate(): Observable<CoinRateFor24Hours> {
    return this.currencyService.getDecentrCoinRateForUsd24hours();
  }

  public getDecentCoinRateHistory(days: number): Observable<CoinRateHistory> {
    return this.currencyService.getDecentCoinRateHistory(days);
  }

  public getBlocks(): Observable<Block[]> {
    return this.blocksService.getLatestBlocksLive(5, ONE_SECOND * 10);
  }

  public getPool(): Observable<Pool> {
    return this.stakingService.getPool();
  }

  public getTransactions(): Observable<Transaction[]> {
    return this.transactionsService.getTransactionsLive(5, ONE_SECOND * 10);
  }
}
