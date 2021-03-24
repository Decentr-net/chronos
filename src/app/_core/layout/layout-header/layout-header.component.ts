import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { SvgIconRegistry } from '@ngneat/svg-icon';

import { svgCloseIcon } from '../../../svg-icons/close';
import { svgLogoIcon } from '../../../svg-icons/logo';
import { svgMenuIcon } from '../../../svg-icons/menu';

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

  onActiveZone(active: boolean): void {
    if (!active) {
      this.isMobileMenuOpen = false;
    }
  }

  onClick(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.changeDetectorRef.detectChanges();
  }

  onObscured(obscured: boolean): void {
    if (obscured) {
      this.isMobileMenuOpen = false;
    }
  }
}
