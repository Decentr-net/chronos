import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { SvgIconRegistry } from '@ngneat/svg-icon';

import { svgCloseIcon } from '@shared/svg-icons/close';
import { svgLogoIcon } from '@shared/svg-icons/logo';
import { svgMenuIcon } from '@shared/svg-icons/menu';

@Component({
  selector: 'app-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class LayoutHeaderComponent {
  public isMobileMenuOpen = false;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private svgIconRegistry: SvgIconRegistry,
  ) {
    svgIconRegistry.register([
      svgCloseIcon,
      svgLogoIcon,
      svgMenuIcon,
    ]);
  }

  public onMenuActiveZoneChange(active: boolean): void {
    this.isMobileMenuOpen = active;
  }

  public openMenu(): void {
    this.isMobileMenuOpen = true;
  }

  public closeMenu(): void {
    this.isMobileMenuOpen = false;
  }

  public toggleMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  public onObscured(obscured: boolean): void {
    this.isMobileMenuOpen = !obscured;
  }
}
