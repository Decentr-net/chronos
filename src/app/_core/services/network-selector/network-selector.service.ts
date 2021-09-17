import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  Network,
  NetworkSelectorService as BaseNetworkSelectorService,
  NetworkSelectorTranslations,
} from '@shared/components/network-selector';
import { MultiConfiguration } from '../configuration';
import { ConfigurationApiService } from '@core/services/configuration/configuration-api.service';

const NETWORK_TRANSLATIONS: Record<keyof MultiConfiguration, string> = {
  mainnet: 'Decentr Main Network',
  testnet: 'Decentr Test Network',
};

const ACTIVE_NETWORK_STORAGE_KEY = 'activeNetwork';

@Injectable({
  providedIn: 'root',
})
export class NetworkSelectorService extends BaseNetworkSelectorService {
  public networkId: ReplaySubject<Network['id']> = new ReplaySubject(1);

  constructor(
    private configurationService: ConfigurationApiService,
  ) {
    super();

    const activeNetworkId = localStorage.getItem(ACTIVE_NETWORK_STORAGE_KEY);

    this.getNetworks().subscribe((networks) => {
      if (networks.map(({ id }) => id).includes(activeNetworkId)) {
        return this.networkId.next(activeNetworkId);
      }

      this.setActiveNetworkId(networks[0].id, false);
    });
  }

  public getNetworks(): Observable<Network[]> {
    return this.configurationService.getConfig().pipe(
      map((multiConfig) => {
        return Object.keys(multiConfig).map((networkId) => this.getOptionConfig(networkId));
      }),
    );
  }

  public getActiveNetworkId(): Observable<Network['id']> {
    return this.networkId.asObservable();
  }

  public setActiveNetworkId(networkId: Network['id'], reload = true): void {
    this.networkId.next(networkId);
    localStorage.setItem(ACTIVE_NETWORK_STORAGE_KEY, networkId);
    reload && location.reload();
  }

  public getTranslations(): Observable<NetworkSelectorTranslations> {
    return of({
      defaultNetwork: `The default network for Decs transactions is ${NETWORK_TRANSLATIONS['mainnet']}.`,
      title: 'Networks',
    });
  }

  private getOptionConfig(networkId: keyof MultiConfiguration): Network {
    return {
      id: networkId,
      name: NETWORK_TRANSLATIONS[networkId],
    };
  }
}
