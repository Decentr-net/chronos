import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { DecentrClient, TheseusClient, VulcanClient } from 'decentr-js';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { map, switchMap, take } from 'rxjs/operators';

import { ConfigurationService } from '../configuration';
import { NetworkService } from '../network';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
export class DecentrService {
  private decentrClient$: ReplaySubject<DecentrClient> = new ReplaySubject(1);

  constructor(
    private configurationService: ConfigurationService,
    networkService: NetworkService,
  ) {
    networkService.getRestUrl().pipe(
      switchMap((api) => DecentrClient.create(api)),
      untilDestroyed(this),
    ).subscribe((decentrClient) => this.decentrClient$.next(decentrClient));
  }

  public get theseusClient(): Observable<TheseusClient> {
    return this.configurationService.getTheseusUrl().pipe(
      map((theseusUrl) => new TheseusClient(theseusUrl)),
    );
  }

  public get vulcanClient(): Observable<VulcanClient> {
    return this.configurationService.getVulcanUrl().pipe(
      map((vulcanUrl) => new VulcanClient(vulcanUrl)),
    );
  }

  public get decentrClient(): Observable<DecentrClient> {
    return this.decentrClient$.pipe(
      take(1),
    );
  }
}
