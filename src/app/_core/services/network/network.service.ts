import { Injectable } from '@angular/core';
import { defer, Observable, ReplaySubject } from 'rxjs';
import { delay, mapTo, mergeMap, retryWhen, take } from 'rxjs/operators';
import { DecentrNodeClient } from 'decentr-js';

import { ONE_SECOND } from '@shared/utils/date';
import { ConfigurationService } from '../configuration';

@Injectable({
  providedIn: 'root',
})
export class NetworkService {
  private availableNodesCache = new Map<string, ReplaySubject<void>>();

  constructor(private configurationService: ConfigurationService) {
  }

  public getRestUrl(): Observable<string> {
    return this.getRandomRestUrl();
  }

  private checkNode(node): Observable<void> {
    if (this.availableNodesCache.has(node)) {
      return this.availableNodesCache.get(node);
    }

    const sbj = new ReplaySubject<void>(1);

    this.availableNodesCache.set(node, sbj);

    DecentrNodeClient.create(node)
      .then(() => sbj.next())
      .catch((error) => sbj.error(error));

    return sbj;
  }

  private getRandomRestUrl(): Observable<string> {
    return this.configurationService.getNodesUrls().pipe(
      mergeMap((nodes) => {
        return defer(() => {
          const random = Math.floor(Math.random() * nodes.length);
          const node = nodes[random];
          return this.checkNode(node).pipe(
            mapTo(node),
          );
        }).pipe(
          retryWhen((errors) => errors.pipe(
            delay(ONE_SECOND / 2),
          )),
        );
      }),
      take(1),
    );
  }
}
