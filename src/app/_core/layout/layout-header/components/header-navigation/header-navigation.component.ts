import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NAVIGATION_ELEMENTS, trackByNavigationElement } from '../navigation';

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderNavigationComponent {
  public readonly pages = NAVIGATION_ELEMENTS;

  public readonly trackByLink = trackByNavigationElement;
}
