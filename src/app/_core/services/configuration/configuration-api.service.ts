import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Environment } from '@environments/environments.definitions';
import { MultiConfiguration } from './configuration.definitions';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationApiService {
  constructor(
    private environment: Environment,
    private httpClient: HttpClient,
  ) {
  }

  public getConfig(): Observable<MultiConfiguration> {
    const now = Date.now();
    const headers = {
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache',
      Expires: '0',
    };

    return this.httpClient.get<MultiConfiguration>(`${this.environment.config}?${now}`, {
      headers,
    });
  }
}
