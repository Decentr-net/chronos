import { Injectable } from '@angular/core';
import { Environment } from '../../../../../environments/environments.definitions';
import {
  Block,
  BlockHeader,
  Decentr,
  Pool,
  Transaction,
  TXsSearchParams,
  TXsSearchResponse,
  Validator,
  ValidatorsFilterParams
} from 'decentr-js';

@Injectable({
  providedIn: 'root'
})
export class DecentrApiService {
  private Decentr: Decentr;

  constructor(
    private environment: Environment,
  ) {
    this.Decentr = this.getDecentrConnector();
  }

  private getDecentrConnector(): Decentr {
    return new Decentr(this.environment.decentrApi, this.environment.chainId);
  }

  getBlocks(currentHeight: BlockHeader['height'], count: number): Promise<Block[]> {
    const blockPromises = [];

    for (let i = +currentHeight - count; i < +currentHeight; ++i) {
      blockPromises.push(this.getBlockByHeight(String(i)));
    }

    return Promise.all(blockPromises);
  }

  getBlockByHeight(height: BlockHeader['height']): Promise<Block> {
    return this.Decentr.blocks.getBlock(height);
  }

  getLatestBlock(): Promise<Block> {
    return this.Decentr.blocks.getLatestBlock();
  }

  getPool(): Promise<Pool> {
    return this.Decentr.staking.getPool();
  }

  getTxByHash(hash: Transaction['txhash']): Promise<Transaction> {
    return this.Decentr.txs.getByHash(hash);
  }

  getTxs(searchParams: TXsSearchParams): Promise<TXsSearchResponse> {
    return this.Decentr.txs.search(searchParams);
  }

  getLatestTxs(count: number, page: TXsSearchParams['page']): Promise<TXsSearchResponse[]> {
    const txsPromises = [];

    for (let i = page - count + 1; i <= page; i++) {
      txsPromises.push(this.getTxs({txMinHeight: 0, limit: 1, page: i}));
    }

    return Promise.all(txsPromises);
  }

  getValidators(status?: ValidatorsFilterParams): Promise<Validator[]> {
    return this.Decentr.staking.getValidators(status);
  }

  getValidatorByAddress(address: Validator['operator_address']): Promise<Validator> {
    return this.Decentr.staking.getValidator(address);
  }
}
