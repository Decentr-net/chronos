import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SvgIconRegistry } from '@ngneat/svg-icon';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { Breakpoint } from '@shared/directives/breakpoint';
import { svgCloseIcon } from '@shared/svg-icons/close';
import { svgMenuIcon } from '@shared/svg-icons/menu';
import { svgSearchIcon } from '@shared/svg-icons/search';

@UntilDestroy()
@Component({
  selector: 'app-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutHeaderComponent implements OnInit {
  public isMobileMenuOpen = false;
  public isMobileSearchOpened = false;

  public readonly breakPoint: typeof Breakpoint = Breakpoint;

  constructor(
    public elementRef: ElementRef,
    private changeDetectorRef: ChangeDetectorRef,
    private svgIconRegistry: SvgIconRegistry,
    private router: Router,
  ) {
    svgIconRegistry.register([
      svgCloseIcon,
      svgMenuIcon,
      svgSearchIcon,
    ]);
  }

  public ngOnInit(): void {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      untilDestroyed(this),
    ).subscribe(() => this.closeMenu());
  }

  public openMenu(): void {
    this.isMobileMenuOpen = true;
  }

  public closeMenu(): void {
    this.isMobileMenuOpen = false;
    this.changeDetectorRef.markForCheck();
  }

  public toggleMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  public openMobileSearch(): void {
    this.isMobileSearchOpened = true;
  }

  public closeMobileSearch(): void {
    this.isMobileSearchOpened = false;
  }
}
