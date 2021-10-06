import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, startWith, switchMap } from 'rxjs/operators';
import { SvgIconRegistry } from '@ngneat/svg-icon';

import { svgCheckIcon } from '@shared/svg-icons/check';
import { svgLinkIcon } from '@shared/svg-icons/link';
import { NetworkSelectorService } from '@core/services/network-selector';

@Component({
  selector: 'app-page-link',
  templateUrl: './page-link.component.html',
  styleUrls: ['./page-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageLinkComponent implements OnInit {
  public pageLink$: Observable<string>;

  public pageLinkIcon: string = svgLinkIcon.name;

  constructor(
    private networkSelectorService: NetworkSelectorService,
    private router: Router,
    private svgIconRegistry: SvgIconRegistry,
  ) {
  }

  public ngOnInit(): void {
    this.svgIconRegistry.register([
      svgCheckIcon,
      svgLinkIcon,
    ]);

    this.pageLink$ = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      startWith(0),
      switchMap(() => this.networkSelectorService.getNetworkRelatedLink()),
    );
  }

  public onPageLinkCopied(): void {
    this.pageLinkIcon = svgCheckIcon.name;
  }

  public onPageLinkLeave(): void {
    this.pageLinkIcon = svgLinkIcon.name;
  }
}
