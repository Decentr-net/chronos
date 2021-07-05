import { Injectable } from '@angular/core';
import { Block, BlockHeader } from 'decentr-js';
import { forkJoin, Observable, of, timer } from 'rxjs';
import { distinctUntilChanged, map, mergeMap, scan, switchMap, tap, throttleTime } from 'rxjs/operators';

import { ONE_SECOND } from '@shared/utils/date';
import { whileDocumentVisible } from '@shared/utils/document';
import { BlocksApiService } from './blocks-api.service';

@Injectable({
  providedIn: 'root',
})
export class BlocksService {
  private readonly blocksCache: Map<string, Block> = new Map();

  constructor(private blocksApiService: BlocksApiService) {
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
      tap((block) => this.blocksCache.set(block.block.header.height, block)),
    );
  }

  public getLatestBlocksLive(count: number, updatePeriod: number): Observable<Block[]> {
    return timer(0, ONE_SECOND).pipe(
      whileDocumentVisible(),
      throttleTime(updatePeriod),
      switchMap(() => this.getLatestBlock()),
      map((block) => block.block.header.height),
      distinctUntilChanged(),
      scan((acc, height) => ({
        height,
        newCount: Math.min((+height - +(acc.height || height)) || count, count),
      }), { newCount: 0, height: '0' }),
      mergeMap((updateInfo) => this.getLatestBlocks(updateInfo.newCount, updateInfo.height)),
      scan((acc, newBlocks) => [...newBlocks, ...acc].slice(0, count), []),
    );
  }

  public getLatestBlocks(count: number, currentHeight: BlockHeader['height']): Observable<Block[]> {
    return forkJoin(new Array(count)
      .fill(null)
      .map((_, index) => this.getBlockByHeight((+currentHeight - index).toString())),
    );
  }
}
