import { Injectable } from '@angular/core';
import { Block, BlockHeader, Transaction } from 'decentr-js';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { DecentrService } from '@core/services/decentr';

@Injectable()
export class BlockDetailsService {

  constructor(
    private decentrService: DecentrService,
  ) {
  }

  public getBlockDetails(height: BlockHeader['height']): Observable<Block> {
    return this.decentrService.getBlockByHeight(height);
  }

  public getBlockTxs(height: number): Observable<Transaction[]> {
    return this.decentrService.getTxs({ txMinHeight: height, txMaxHeight: height }).pipe(
      map(txSearchResponse => txSearchResponse.txs),
    );
  }
}
