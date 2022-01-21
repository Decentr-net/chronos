import { Injectable } from '@angular/core';
import { DecentrMintClient } from 'decentr-js';
import { Observable, ReplaySubject } from 'rxjs';
import { mergeMap, switchMap, take } from 'rxjs/operators';

import { NetworkService } from '../network';

@Injectable({
  providedIn: 'root',
})
export class MintApiService {
  private client: ReplaySubject<DecentrMintClient> = new ReplaySubject(1);

  constructor(
    private networkService: NetworkService,
  ) {
    this.createAPIClient().subscribe((client) => this.client.next(client));
  }

  public getInflation(): Observable<string> {
    return this.client.pipe(
      take(1),
      mergeMap((client) => client.getInflation()),
    );
  }

  private createAPIClient(): Observable<DecentrMintClient> {
    return this.networkService.getRestUrl().pipe(
      switchMap((api) => DecentrMintClient.create(api)),
    );
  }
}
