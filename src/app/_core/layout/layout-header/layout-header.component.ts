import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TUI_IS_ANDROID, TUI_IS_IOS } from '@taiga-ui/cdk';

import { AppRoute } from '../../../app-route';
import { SvgIconRegistry } from '@ngneat/svg-icon';
import { svgLogoIcon } from '../../../svg-icons/logo';
import { svgLogoIconIcon } from '../../../svg-icons/logo-icon';

export interface PageModel {
  pageName: string;
  pageUrl: AppRoute;
}

@Component({
  selector: 'app-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: TUI_IS_IOS,
      useValue: false,
    },
    {
      provide: TUI_IS_ANDROID,
      useValue: false,
    },
  ],
})

export class LayoutHeaderComponent {
  readonly pages: PageModel[] = [
    {
      pageName: 'Dashboard',
      pageUrl: AppRoute.Dashboard,
    },
    {
      pageName: 'Validators',
      pageUrl: AppRoute.Validators,
    },
    {
      pageName: 'Blocks',
      pageUrl: AppRoute.Blocks,
    },
    {
      pageName: 'Transactions',
      pageUrl: AppRoute.Transactions,
    }
  ];

  constructor(
    private svgIconRegistry: SvgIconRegistry,
  ) {
    svgIconRegistry.register([
      svgLogoIcon,
      svgLogoIconIcon,
    ]);
  }
}
