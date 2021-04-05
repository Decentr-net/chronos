import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import {
  // defer,
  Observable,
  of,
} from 'rxjs';

// import { Environment } from '@environments/environments.definitions';
import { Configuration } from './configuration.definitions';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationApiService {
  // constructor(
    // private environment: Environment,
    // private httpClient: HttpClient,
  // ) {
  // }

  public getConfig(): Observable<Configuration> {
    // const now = Date.now();
    // const headers = {
    //   'Cache-Control': 'no-cache',
    //   Pragma: 'no-cache',
    //   Expires: '0'
    // };
    //
    // return this.httpClient.get<Configuration>(`${this.environment.awsStorage}/config.json?${now}`, {
    //   headers,
    // });

    return of({
      network: {
        rest: [
          'https://ares.testnet.decentr.xyz',
          'https://poseidon.testnet.decentr.xyz',
          'https://hera.testnet.decentr.xyz',
          'https://zeus.testnet.decentr.xyz',
          'https://hermes.testnet.decentr.xyz',
        ],
      },
      maintenance: false,
      theseus: {
        url: 'https://theseus.testnet.decentr.xyz',
      },
    });
  }
}
