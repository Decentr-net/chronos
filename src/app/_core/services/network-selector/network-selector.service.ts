import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable, of, ReplaySubject } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import {
  Network,
  NetworkSelectorService as BaseNetworkSelectorService,
  NetworkSelectorTranslations,
} from '@shared/components/network-selector';
import { getLocalLinkWithParams } from '@shared/utils/document';
import { ConfigurationApiService } from '../configuration';
import { Configuration } from '../configuration';

const NETWORK_TRANSLATIONS: Record<keyof Configuration['networks'], string> = {
  mainnet: 'Decentr Main Network',
  testnet: 'Decentr Test Network',
};

const ACTIVE_NETWORK_STORAGE_KEY = 'activeNetwork';
const NETWORK_ID_QUERY_PARAM = 'networkId';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
export class NetworkSelectorService extends BaseNetworkSelectorService {
  public networkId: ReplaySubject<Network['id']> = new ReplaySubject(1);

  constructor(
    private activatedRoute: ActivatedRoute,
    private configurationService: ConfigurationApiService,
  ) {
    super();

    combineLatest([
      activatedRoute.queryParamMap.pipe(
        map((paramMap) => paramMap.get(NETWORK_ID_QUERY_PARAM)),
        distinctUntilChanged(),
      ),
      this.getNetworks().pipe(
        map((networks) => networks.map(({ id }) => id)),
      ),
      this.getActiveNetworkId(),
    ]).pipe(
      filter(([specifiedNetworkId, networkIds, activeNetworkId]) => {
        return activeNetworkId !== specifiedNetworkId && networkIds.includes(specifiedNetworkId);
      }),
      untilDestroyed(this),
    ).subscribe(([specifiedNetworkId]) => {
      this.setActiveNetworkId(specifiedNetworkId, false);
    });

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
        return Object.keys(multiConfig.networks).map((networkId) => this.getOptionConfig(networkId));
      }),
    );
  }

  public getActiveNetworkId(): Observable<Network['id']> {
    return this.networkId.asObservable();
  }

  public setActiveNetworkId(networkId: Network['id'], reload = true): void {
    this.networkId.next(networkId);
    localStorage.setItem(ACTIVE_NETWORK_STORAGE_KEY, networkId);

    const urlParams = new URLSearchParams(location.search);
    const oldUrlParamsString = urlParams.toString();
    urlParams.delete(NETWORK_ID_QUERY_PARAM);
    const urlParamsString = urlParams.toString();

    const networkParamChanged = oldUrlParamsString !== urlParamsString;

    if (networkParamChanged) {
      location.href = getLocalLinkWithParams(urlParamsString);
      return;
    }

    reload && location.reload();
  }

  public getNetworkRelatedLink(): Observable<string> {
    return this.networkId.pipe(
      map((networkIdValue) => {
        const urlParams = new URLSearchParams(location.search);
        urlParams.set(NETWORK_ID_QUERY_PARAM, networkIdValue);
        return getLocalLinkWithParams(urlParams.toString());
      }),
    );
  }

  public getTranslations(): Observable<NetworkSelectorTranslations> {
    return of({
      defaultNetwork: `The default network for Decs transactions is ${NETWORK_TRANSLATIONS['mainnet']}.`,
      title: 'Networks',
    });
  }

  private getOptionConfig(networkId: keyof Configuration['networks']): Network {
    return {
      id: networkId,
      name: NETWORK_TRANSLATIONS[networkId],
    };
  }
}
