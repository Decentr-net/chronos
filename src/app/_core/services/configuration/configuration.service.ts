import { Injectable } from '@angular/core';
import { filter, map, take } from 'rxjs/operators';
import { combineLatest, Observable, ReplaySubject, Subscription } from 'rxjs';

import { NetworkSelectorService } from '../network-selector';
import { Configuration, Network } from './configuration.definitions';
import { ConfigurationApiService } from './configuration-api.service';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  private config$: ReplaySubject<Configuration> = new ReplaySubject(1);

  private pendingConfig: boolean;

  private configSubscription: Subscription = Subscription.EMPTY;

  constructor(
    private configurationApiService: ConfigurationApiService,
    private networkSelectorService: NetworkSelectorService,
  ) {
  }

  private getConfig(): Observable<Configuration> {
    if (!this.pendingConfig) {
      this.pendingConfig = true;
      this.configSubscription?.unsubscribe();

      this.configSubscription = this.configurationApiService.getConfig().pipe(
      ).subscribe(
        (config) => this.config$.next(config),
        (error) => this.config$.error(error),
      );
    }

    return this.config$.pipe(
      filter((config) => !!config),
      take(1),
    );
  }

  private getNetworkConfig(): Observable<Network> {
    return combineLatest([
      this.getConfig(),
      this.networkSelectorService.getActiveNetworkId().pipe(
        filter((id) => !!id),
      ),
    ]).pipe(
      map(([config, networkId]) => config.networks[networkId]),
      take(1),
    );
  }

  public forceUpdate(): void {
    this.config$.next(void 0);
    this.pendingConfig = false;
  }

  public getMaintenanceStatus(): Observable<boolean> {
    return this.getNetworkConfig().pipe(
      map((config) => config.maintenance),
    );
  }

  public getNodesUrls(): Observable<string[]> {
    return this.getNetworkConfig().pipe(
      map((config) => config.network.rest),
    );
  }

  public getTheseusUrl(): Observable<string> {
    return this.getNetworkConfig().pipe(
      map((config) => config.theseus.url),
    );
  }

  public getVulcanUrl(): Observable<string> {
    return this.getConfig().pipe(
      map((config) => config.vulcan.url),
    );
  }
}
