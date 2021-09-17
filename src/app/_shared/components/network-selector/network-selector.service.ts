import { Observable } from 'rxjs';

import { Network, NetworkSelectorTranslations } from './network-selector.definitions';

export abstract class NetworkSelectorService {
  public abstract getNetworks(): Observable<Network[]>;

  public abstract getActiveNetworkId(): Observable<Network['id']>;

  public abstract setActiveNetworkId(networkId: Network['id']): void;

  public abstract getTranslations(): Observable<NetworkSelectorTranslations>;
}
