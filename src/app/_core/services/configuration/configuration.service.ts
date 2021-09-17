import { Injectable } from '@angular/core';
import { filter, pluck, take } from 'rxjs/operators';
import { combineLatest, Observable, ReplaySubject } from 'rxjs';

import { NetworkSelectorService } from '../network-selector';
import { Configuration, MultiConfiguration } from './configuration.definitions';
import { ConfigurationApiService } from './configuration-api.service';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  private configuration$: ReplaySubject<Configuration> = new ReplaySubject(1);
  private pendingConfiguration: boolean;

  constructor(
    private configurationApiService: ConfigurationApiService,
    private networkSelectorService: NetworkSelectorService,
  ) {
  }

  private getConfig(): Observable<Configuration> {
    if (!this.pendingConfiguration) {
      this.pendingConfiguration = true;

      combineLatest([
        this.getMultiConfiguration(),
        this.networkSelectorService.getActiveNetworkId(),
      ]).subscribe(
        ([configuration, activeNetworkId]) => this.configuration$.next(configuration[activeNetworkId]),
      );
    }

    return this.configuration$.pipe(
      filter((configuration) => !!configuration),
      take(1),
    );
  }

  public getMultiConfiguration(): Observable<MultiConfiguration> {
    return this.configurationApiService.getConfig();
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
