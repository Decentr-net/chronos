import { Injectable } from '@angular/core';
import { DecentrService } from '@core/services/decentr';
import { Observable } from 'rxjs';
import { Block, BlockHeader, Transaction, TXsSearchResponse } from 'decentr-js';
import { map } from 'rxjs/operators';

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
    return this.decentrService.getTxs({txMinHeight: height, txMaxHeight: height}).pipe(
      map(txSearchResponse => txSearchResponse.txs)
    );
  }
}
