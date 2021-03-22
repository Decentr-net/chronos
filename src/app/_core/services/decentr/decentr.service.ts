import { Injectable } from '@angular/core';
import { DecentrApiService } from '@core/services/decentr/api';
import { defer, Observable } from 'rxjs';
import {
  Block,
  BlockBody,
  BlockHeader,
  Pool,
  Transaction,
  TXsSearchParams,
  TXsSearchResponse,
  Validator,
  ValidatorsFilterParams
} from 'decentr-js';
import { map, pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DecentrService {

  constructor(
    private decentrApiService: DecentrApiService,
  ) {
  }

  getBlocks(currentHeight: BlockHeader['height'], count: number): Observable<Block[]> {
    return defer(() => this.decentrApiService.getBlocks(currentHeight, count));
  }

  getBlockByHeight(height: BlockHeader['height']): Observable<Block> {
    return defer(() => this.decentrApiService.getBlockByHeight(height));
  }

  getPool(): Observable<Pool> {
    return defer(() => this.decentrApiService.getPool());
  }

  getLatestBlock(): Observable<Pick<BlockHeader, 'height' | 'time'>> {
    return defer(() => this.decentrApiService.getLatestBlock()).pipe(
      pluck('block', 'header'),
      map(({ height, time }) => ({ height, time })),
    );
  }

  getLatestTxs(count: number, lastPage: TXsSearchParams['page']): Observable<Transaction[]> {
    return defer(() => this.decentrApiService.getLatestTxs(count, lastPage)).pipe(
      map(txResponse => txResponse.map(tx => tx.txs[0]))
    );
  }

  getTxByHash(hash: Transaction['txhash']): Observable<Transaction> {
    return defer(() => this.decentrApiService.getTxByHash(hash));
  }

  getTxs(searchParams: TXsSearchParams): Observable<TXsSearchResponse> {
    return defer(() => this.decentrApiService.getTxs(searchParams));
  }

  getValidators(filter?: ValidatorsFilterParams): Observable<Validator[]> {
    return defer(() => this.decentrApiService.getValidators(filter));
  }

  getValidatorByAddress(address): Observable<Validator> {
    return defer(() => this.decentrApiService.getValidatorByAddress(address));
  }
}
