import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, TrackByFunction } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SvgIconRegistry } from '@ngneat/svg-icon';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { svgCheckIcon } from '@shared/svg-icons/check';
import { svgExpandRightIcon } from '@shared/svg-icons/expand-right';
import { svgSignalIcon } from '@shared/svg-icons/signal';
import { Network, NetworkSelectorTranslations } from './network-selector.definitions';
import { NetworkSelectorService } from './network-selector.service';

@UntilDestroy()
@Component({
  selector: 'app-network-selector',
  templateUrl: './network-selector.component.html',
  styleUrls: ['./network-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NetworkSelectorComponent implements OnInit {
  public activeNetwork: Network;

  public networks$: Observable<Network[]>;

  public translations$: Observable<NetworkSelectorTranslations>;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private networkSelectorService: NetworkSelectorService,
    private svgIconRegistry: SvgIconRegistry,
  ) {
    svgIconRegistry.register([
      svgCheckIcon,
      svgExpandRightIcon,
      svgSignalIcon,
    ]);
  }

  public ngOnInit(): void {
    this.networks$ = this.networkSelectorService.getNetworks();

    combineLatest([
      this.networks$,
      this.networkSelectorService.getActiveNetworkId(),
    ]).pipe(
      map(([networks, activeNetworkId]) => networks.find(({ id }) => id === activeNetworkId)),
      untilDestroyed(this),
    ).subscribe((activeNetwork) => {
      this.activeNetwork = activeNetwork;
      this.changeDetectorRef.detectChanges();
    });

    this.translations$ = this.networkSelectorService.getTranslations();
  }

  public switchNetwork(network: Network): void {
    this.networkSelectorService.setActiveNetworkId(network.id);
  }

  public trackByName: TrackByFunction<Network> = ({}, { name }) => name;
}
