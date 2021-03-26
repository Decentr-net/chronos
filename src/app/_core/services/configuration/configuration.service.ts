import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigurationApiService } from './configuration-api.service';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  constructor(private configurationApiService: ConfigurationApiService) {
  }

  public getMaintenanceStatus(): Observable<boolean> {
    return this.configurationApiService.getConfig().pipe(
      pluck('maintenance'),
    );
  }

  public getNodesUrls(): Observable<string[]> {
    return this.configurationApiService.getConfig().pipe(
      pluck('network', 'rest'),
    );
  }

  public getTheseusUrl(): Observable<string> {
    return this.configurationApiService.getConfig().pipe(
      pluck('theseus', 'url'),
    );
  }
}
