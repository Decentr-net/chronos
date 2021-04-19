import { HeaderMobileMenuDropdownComponent } from './header-mobile-menu';
import { HeaderNavigationLinkComponent } from './header-navigation-link';
import { HeaderNavigationComponent } from './header-navigation';
import { HeaderSearchComponent } from './header-search';

export * from './header-navigation';
export * from './header-navigation-link';

export const HEADER_COMPONENTS = [
  HeaderMobileMenuDropdownComponent,
  HeaderNavigationComponent,
  HeaderNavigationLinkComponent,
  HeaderSearchComponent,
];
