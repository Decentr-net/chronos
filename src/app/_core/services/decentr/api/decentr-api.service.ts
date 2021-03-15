import { Injectable } from '@angular/core';
import { Environment } from '../../../../../environments/environments.definitions';
import { Decentr, LatestBlock, Pool } from 'decentr-js';

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

  getLatestBlock(): Promise<LatestBlock> {
    return this.Decentr.blocks.getLatestBlock();
  }

  getPool(): Promise<Pool> {
    return this.Decentr.staking.getPool();
  }

}
