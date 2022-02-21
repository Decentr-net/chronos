import { Injectable } from '@angular/core';
import { AdvDdvStatistics, Block, Coin, Pool } from 'decentr-js';
import { Observable } from 'rxjs';

import { ONE_HOUR, ONE_SECOND } from '@shared/utils/date';
import { BlocksService } from '@core/services/blocks';
import { CoinRateFor24Hours, CoinRateHistory, CurrencyService } from '@core/services/currency';
import { StakingService } from '@core/services/staking';
import { RegisteredUsers, StatisticsService } from '@core/services/statistics';
import { BankService } from '@core/services/bank';
import { MintService } from '@core/services/mint';

@Injectable()
export class DashboardPageService {
  constructor(
    private bankService: BankService,
    private blocksService: BlocksService,
    private currencyService: CurrencyService,
    private mintService: MintService,
    private stakingService: StakingService,
    private statisticsService: StatisticsService,
    // private transactionsService: TransactionsService,
  ) {
  }

  public getAdvDdvStatistics(): Observable<AdvDdvStatistics> {
    return this.statisticsService.getAdvDdvStatistics();
  }

  public getCoinSupply(coinName: string): Observable<Coin> {
    return this.bankService.getCoinSupply(coinName);
  }

  public getCoinRate(): Observable<CoinRateFor24Hours> {
    return this.currencyService.getDecentrCoinRateForUsd24hours();
  }

  public getDecentCoinRateHistory(days: number): Observable<CoinRateHistory> {
    return this.currencyService.getDecentCoinRateHistory(days);
  }

  public getBlocks(): Observable<Block[]> {
    return this.blocksService.getLatestBlocksLive(5, ONE_HOUR * 24);
  }

  public getLatestBlock(): Observable<Block> {
    return this.blocksService.getLatestBlockLive(ONE_SECOND * 15);
  }

  public getInflation(): Observable<string> {
    return this.mintService.getInflation();
  }

  public getPool(): Observable<Pool> {
    return this.stakingService.getPool();
  }

  public getRegisteredUsersStatistics(): Observable<RegisteredUsers> {
  return this.statisticsService.getRegisteredUsersStatistics();
  }

  // TODO: implement with offchain
  // public getTransactions(): Observable<DecodedIndexedTx[]> {
  //   return this.transactionsService.getTransactionsLive(5, ONE_HOUR * 24);
  // }
}
