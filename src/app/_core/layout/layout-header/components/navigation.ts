import { AppRoute } from '../../../../app-route';
import { TrackByFunction } from '@angular/core';

export interface NavigationMenuElement {
  name: string;
  url: AppRoute;
}

export const NAVIGATION_ELEMENTS: NavigationMenuElement[] = [
  {
    name: 'Dashboard',
    url: AppRoute.Dashboard,
  },
  {
    name: 'Blocks',
    url: AppRoute.Blocks,
  },
  // {
  //   name: 'Transactions',
  //   url: AppRoute.Transactions,
  // },
  {
    name: 'Validators',
    url: AppRoute.Validators,
  },
];

export const trackByNavigationElement: TrackByFunction<NavigationMenuElement> = ({}, { name }) => name;
