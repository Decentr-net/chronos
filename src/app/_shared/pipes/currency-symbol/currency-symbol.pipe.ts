import { ChangeDetectorRef, Pipe, PipeTransform } from '@angular/core';
import { combineLatest, Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { NetworkSelectorService } from '@core/services/network-selector';

@UntilDestroy()
@Pipe({
  name: 'appCurrencySymbol',
  pure: false,
})
export class CurrencySymbolPipe implements PipeTransform {
  private latestValue: string;

  private changes$: ReplaySubject<{ target: string; comma: boolean }> = new ReplaySubject(1);

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private networkSelectorService: NetworkSelectorService,
  ) {
    combineLatest([
      this.getSymbol(),
      this.changes$,
    ]).pipe(
      untilDestroyed(this),
      map(([symbol, { target,  comma }]) => [target, symbol].join(comma ? ', ' : ' ')),
    ).subscribe((value) => {
      this.latestValue = value;

      this.changeDetectorRef.markForCheck();
    });
  }

  public transform(target: string, comma = false): string {
    this.changes$.next({ target, comma });

    return this.latestValue;
  }

  private getSymbol(): Observable<string> {
    return this.networkSelectorService.getActiveNetworkId().pipe(
      map((networkId) => {
        switch (networkId) {
          case 'testnet': {
            return 'tDEC';
          }
          default: {
            return 'DEC';
          }
        }
      }),
    );
  }
}
