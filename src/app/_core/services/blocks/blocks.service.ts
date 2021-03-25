import { Injectable } from '@angular/core';
import { Block, BlockHeader } from 'decentr-js';
import { forkJoin, Observable, timer } from 'rxjs';
import { distinctUntilChanged, map, mergeMap, scan, switchMap } from 'rxjs/operators';

import { BlocksApiService } from './blocks-api.service';

@Injectable({
  providedIn: 'root',
})
export class BlocksService {
  constructor(private blocksApiService: BlocksApiService) {
  }

  public getBlockByHeight(height: BlockHeader['height']): Observable<Block> {
    return this.blocksApiService.getBlockByHeight(height);
  }

  public getLatestBlock(): Observable<Block> {
    return this.blocksApiService.getLatestBlock();
  }

  public getLatestBlocksLive(count: number, updatePeriod: number): Observable<Block[]> {
    return timer(0, updatePeriod).pipe(
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
      .map((_, index) => this.getBlockByHeight((+currentHeight - index).toString()))
    );
  }
}