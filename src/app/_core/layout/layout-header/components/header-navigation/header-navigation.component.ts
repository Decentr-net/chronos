import { ChangeDetectionStrategy, Component, TrackByFunction } from '@angular/core';

import { AppRoute } from '../../../../../app-route';

export interface NavigationMenuElement {
  name: string;
  url: AppRoute;
}

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderNavigationComponent {
  readonly pages: NavigationMenuElement[] = [
    {
      name: 'Dashboard',
      url: AppRoute.Dashboard,
    },
    {
      name: 'Blocks',
      url: AppRoute.Blocks,
    },
    {
      name: 'Transactions',
      url: AppRoute.Transactions,
    },
    {
      name: 'Validators',
      url: AppRoute.Validators,
    },
  ];

  public readonly trackByLink: TrackByFunction<NavigationMenuElement> = ({}, { name }) => name;
}
