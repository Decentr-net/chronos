import { Injectable } from '@angular/core';
import { filter, pluck, take } from 'rxjs/operators';
import { combineLatest, Observable, ReplaySubject } from 'rxjs';

import { NetworkSelectorService } from '../network-selector';
import { Network } from './configuration.definitions';
import { ConfigurationApiService } from './configuration-api.service';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  private configuration$: ReplaySubject<Network> = new ReplaySubject(1);
  private pendingConfiguration: boolean;

  constructor(
    private configurationApiService: ConfigurationApiService,
    private networkSelectorService: NetworkSelectorService,
  ) {
  }

  private getConfig(): Observable<Network> {
    if (!this.pendingConfiguration) {
      this.pendingConfiguration = true;

      combineLatest([
        this.configurationApiService.getConfig(),
        this.networkSelectorService.getActiveNetworkId(),
      ]).subscribe(
        ([{ networks }, activeNetworkId]) => this.configuration$.next(networks[activeNetworkId]),
      );
    }

    return this.configuration$.pipe(
      filter((configuration) => !!configuration),
      take(1),
    );
  }

  public forceUpdate(): void {
    this.configuration$.next(void 0);
    this.pendingConfiguration = false;
  }

  public getMaintenanceStatus(): Observable<boolean> {
    return this.getConfig().pipe(
      pluck('maintenance'),
    );
  }

  public getNodesUrls(): Observable<string[]> {
    return this.getConfig().pipe(
      pluck('network', 'rest'),
    );
  }

  public getTheseusUrl(): Observable<string> {
    return this.getConfig().pipe(
      pluck('theseus', 'url'),
    );
  }
}
