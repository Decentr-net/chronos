import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgIconRegistry } from '@ngneat/svg-icon';

import { SocialLinks } from '@core/layout/layout-footer/social-links.enum';
import { svgGithubIcon } from '../../../svg-icons/github';
import { svgMediumIcon } from '../../../svg-icons/medium';
import { svgTelegramIcon } from '../../../svg-icons/telegram';
import { svgTwitterIcon } from '../../../svg-icons/twitter';
import { svgLogo2Icon } from '../../../svg-icons/logo2';


@Component({
  selector: 'app-layout-footer',
  templateUrl: './layout-footer.component.html',
  styleUrls: ['./layout-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutFooterComponent {
  public readonly socialLinks: typeof SocialLinks = SocialLinks;
  public readonly currentYear: number = new Date().getFullYear();

  constructor(
    svgIconRegistry: SvgIconRegistry,
  ) {
    svgIconRegistry.register([
      svgGithubIcon,
      svgLogo2Icon,
      svgMediumIcon,
      svgTelegramIcon,
      svgTwitterIcon,
    ]);
  }
}
