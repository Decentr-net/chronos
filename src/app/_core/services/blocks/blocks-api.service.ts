import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Block, BlockHeader } from 'decentr-js';

import { DecentrService } from '../decentr';

@Injectable({
  providedIn: 'root',
})
export class BlocksApiService {

  constructor(
    private decentrService: DecentrService,
  ) {
  }

  public getBlockByHeight(height: BlockHeader['height']): Observable<Block> {
    return this.decentrService.decentrClient.pipe(
      switchMap((decentrClient) => decentrClient.blocks.getBlock(height)),
    );
  }

  public getLatestBlock(): Observable<Block> {
    return this.decentrService.decentrClient.pipe(
      switchMap((decentrClient) => decentrClient.blocks.getBlock()),
    );
  }
}
