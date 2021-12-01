import { Injectable } from '@angular/core';
import { Block, MintingInflation, Pool, TotalSupply, Transaction } from 'decentr-js';
import { Observable } from 'rxjs';

import { ONE_SECOND } from '@shared/utils/date';
import { BlocksService } from '@core/services/blocks';
import { CoinRateFor24Hours, CoinRateHistory, CurrencyService } from '@core/services/currency';
import { StakingService } from '@core/services/staking';
import { AdvDdvStatistics, RegisteredUsers, StatisticsService } from '@core/services/statistics';
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

  public getInflation(): Observable<MintingInflation> {
    return this.stakingService.getInflation();
  }

  public getPool(): Observable<Pool> {
    return this.stakingService.getPool();
  }

  public getRegisteredUsersStatistics(): Observable<RegisteredUsers> {
  return this.statisticsService.getRegisteredUsersStatistics();
  }

  public getTransactions(): Observable<Transaction[]> {
    return this.transactionsService.getTransactionsLive(5, ONE_SECOND * 10);
  }
}
