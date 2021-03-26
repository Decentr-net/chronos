import { Injectable } from '@angular/core';
import { defer, Observable, ReplaySubject } from 'rxjs';
import { delay, mergeMap, retryWhen } from 'rxjs/operators';
import { getNodeInfo } from 'decentr-js';

import { ONE_SECOND } from '@shared/utils/date';
import { ConfigurationService } from '../configuration';

@Injectable({
  providedIn: 'root',
})
export class NetworkService {
  private restUrl: ReplaySubject<string> = new ReplaySubject(1);

  constructor(private configurationService: ConfigurationService) {
    this.getRandomRestUrl().subscribe(this.restUrl);
  }

  public getRestUrl(): Observable<string> {
    return this.restUrl;
  }

  private getRandomRestUrl(): Observable<string> {
    return this.configurationService.getNodesUrls().pipe(
      mergeMap((nodes) => {
        return defer(() => {
          const random = Math.floor(Math.random() * nodes.length);
          const node = nodes[random];
          return getNodeInfo(node).then(() => node);
        }).pipe(
          retryWhen((errors) => errors.pipe(
            delay(ONE_SECOND / 2),
          )),
        );
      }),
    );
  }
}
