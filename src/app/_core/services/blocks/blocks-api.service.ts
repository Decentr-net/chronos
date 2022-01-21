import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { mergeMap, switchMap, take } from 'rxjs/operators';
import { Block, BlockHeader, DecentrBlocksClient } from 'decentr-js';

import { NetworkService } from '../network';

@Injectable({
  providedIn: 'root',
})
export class BlocksApiService {
  private client: ReplaySubject<DecentrBlocksClient> = new ReplaySubject(1);

  constructor(
    private networkService: NetworkService,
  ) {
    this.createAPIClient().subscribe((client) => this.client.next(client));
  }

  public getBlockByHeight(height: BlockHeader['height']): Observable<Block> {
    return this.client.pipe(
      take(1),
      mergeMap((client) => client.getBlock(height)),
    );
  }

  public getLatestBlock(): Observable<Block> {
    return this.client.pipe(
      take(1),
      mergeMap((client) => client.getBlock()),
    );
  }

  private createAPIClient(): Observable<DecentrBlocksClient> {
    return this.networkService.getRestUrl().pipe(
      switchMap((api) => DecentrBlocksClient.create(api)),
    );
  }
}
