import { Injectable } from '@angular/core';
import { Block, BlockHeader, Pool, Transaction } from 'decentr-js';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { AdvDdvStatistics } from '../../models/adv-ddv-statistics.model';
import { CoinRateFor24Hours, CoinRateHistory, CurrencyService } from '@core/services/currency';
import { DecentrService } from '@core/services/decentr';
import { Environment } from '../../../../environments/environments.definitions';
import { sortByHeight } from '@shared/utils/blockchain';

@Injectable()
export class DashboardPageService {
  constructor(
    private currencyService: CurrencyService,
    private decentrService: DecentrService,
    private environment: Environment,
    private http: HttpClient,
  ) {
  }

  public getAdvDdvStatistics(): Observable<AdvDdvStatistics> {
    return this.http.get<AdvDdvStatistics>(`${this.environment.theseusUrl}/v1/profiles/stats`);
  }

  public getCoinRate(): Observable<CoinRateFor24Hours> {
    return this.currencyService.getDecentrCoinRateForUsd24hours();
  }

  public getDecentCoinRateHistory(days: number): Observable<CoinRateHistory> {
    return this.currencyService.getDecentCoinRateHistory(days);
  }

  public getBlocks(count: number): Observable<Block[]> {
    return this.decentrService.getLatestBlock().pipe(
      switchMap(blockResponse => this.decentrService.getBlocks(blockResponse.height, count)),
      map(block => block.sort(sortByHeight)),
    );
  }

  public getLatestBlock(): Observable<Pick<BlockHeader, 'height' | 'time'>> {
    return this.decentrService.getLatestBlock();
  }

  public getPool(): Observable<Pool> {
    return this.decentrService.getPool();
  }

  public getLatestTxs(): Observable<Transaction[]> {
    return this.decentrService.getTxs({ txMinHeight: 0, limit: 1 }).pipe(
      switchMap(txsResponse => this.decentrService.getLatestTxs(5, txsResponse.page_total)),
      map(tx => tx.sort(sortByHeight)),
    );
  }
}
