import { Injectable } from '@angular/core';
import { Block, BlockHeader, DecodedIndexedTx } from 'decentr-js';
import { forkJoin, Observable, of, timer } from 'rxjs';
import { catchError, distinctUntilChanged, map, mergeMap, scan, switchMap, tap, throttleTime } from 'rxjs/operators';

import { ONE_SECOND } from '@shared/utils/date';
import { whileDocumentVisible } from '@shared/utils/document';
import { TransactionsService } from '@core/services/transactions';
import { BlocksApiService } from './blocks-api.service';

@Injectable({
  providedIn: 'root',
})
export class BlocksService {
  private readonly blocksCache: Map<number, Block> = new Map();

  private readonly blockTransactionsCache: Map<BlockHeader['height'], DecodedIndexedTx[]> = new Map();

  constructor(
    private blocksApiService: BlocksApiService,
    private transactionsService: TransactionsService,
  ) {
  }

  public getBlockByHeight(height: BlockHeader['height']): Observable<Block> {
    const cachedBlock = this.blocksCache.get(height);

    return cachedBlock
      ? of(cachedBlock)
      : this.blocksApiService.getBlockByHeight(height).pipe(
        tap((block) => this.blocksCache.set(height, block)),
      );
  }

  public getLatestBlock(): Observable<Block> {
    return this.blocksApiService.getLatestBlock().pipe(
      tap((block) => this.blocksCache.set(block.header.height, block)),
    );
  }

  public getLatestBlockLive(updatePeriod: number): Observable<Block> {
    return timer(0, ONE_SECOND).pipe(
      whileDocumentVisible(),
      throttleTime(updatePeriod),
      switchMap(() => this.getLatestBlock()),
    );
  }

  public getLatestBlocksLive(count: number, updatePeriod: number): Observable<Block[]> {
    return timer(0, ONE_SECOND).pipe(
      whileDocumentVisible(),
      throttleTime(updatePeriod),
      switchMap(() => this.getLatestBlock()),
      map((block) => block.header.height),
      distinctUntilChanged(),
      scan((acc, height) => ({
        height,
        newCount: Math.min((+height - +(acc.height || height)) || count, count),
      }), { newCount: 0, height: 0 }),
      mergeMap((updateInfo) => this.getLatestBlocks(updateInfo.newCount, updateInfo.height)),
      scan((acc, newBlocks) => [...newBlocks, ...acc].slice(0, count), []),
    );
  }

  public getLatestBlocks(count: number, currentHeight: BlockHeader['height']): Observable<Block[]> {
    return forkJoin(new Array(Math.min(count, currentHeight))
      .fill(null)
      .map((_, index) => this.getBlockByHeight((currentHeight - index))),
    );
  }

  public getBlockTransactions(height: BlockHeader['height']): Observable<DecodedIndexedTx[]> {
    const cachedTransactions = this.blockTransactionsCache.get(height);

    return cachedTransactions
      ? of(cachedTransactions)
      : this.transactionsService.searchTransactions({ height }).pipe(
        tap((transactions) => this.blockTransactionsCache.set(height, transactions)),
        catchError(() => of([])),
      );
  }
}
