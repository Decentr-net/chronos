import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Block, BlockHeader, getBlock, getLatestBlock } from 'decentr-js';

import { NetworkService } from '../network';

@Injectable({
  providedIn: 'root',
})
export class BlocksApiService {
  constructor(
    private networkService: NetworkService,
  ) {
  }

  public getBlockByHeight(height: BlockHeader['height']): Observable<Block> {
    return this.networkService.getRestUrl().pipe(
      mergeMap((restUrl) => getBlock(restUrl, height)),
    );
  }

  public getLatestBlock(): Observable<Block> {
    return this.networkService.getRestUrl().pipe(
      mergeMap((restUrl) => getLatestBlock(restUrl)),
    );
  }
}
