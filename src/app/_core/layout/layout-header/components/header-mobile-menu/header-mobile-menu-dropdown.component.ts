import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NAVIGATION_ELEMENTS, trackByNavigationElement } from '../navigation';

@Component({
  selector: 'app-header-mobile-menu-dropdown',
  templateUrl: './header-mobile-menu-dropdown.component.html',
  styleUrls: ['./header-mobile-menu-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderMobileMenuDropdownComponent {
  public readonly pages = NAVIGATION_ELEMENTS;

  public readonly trackByLink = trackByNavigationElement;
}
