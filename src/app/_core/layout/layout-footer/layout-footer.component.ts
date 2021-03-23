import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgIconRegistry } from '@ngneat/svg-icon';

import { svgGithubIcon } from '../../../svg-icons/github';
import { svgLogoBlueIcon } from '../../../svg-icons/logo-blue';
import { svgMediumIcon } from '../../../svg-icons/medium';
import { svgTelegramIcon } from '../../../svg-icons/telegram';
import { svgTwitterIcon } from '../../../svg-icons/twitter';

interface SocialLinks {
  iconKey: string;
  title: string;
  url: string;
}

@Component({
  selector: 'app-layout-footer',
  templateUrl: './layout-footer.component.html',
  styleUrls: ['./layout-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutFooterComponent {
  public readonly currentYear: number = new Date().getFullYear();
  public readonly socialLinks: SocialLinks[] = [
    {
      iconKey: svgGithubIcon.name,
      title: 'GitHub',
      url: 'https://github.com/Decentr-net',
    },
    {
      iconKey: svgTelegramIcon.name,
      title: 'Telegram',
      url: 'https://t.me/DecentrNet',
    },
    {
      iconKey: svgTwitterIcon.name,
      title: 'Twitter',
      url: 'https://twitter.com/decentrnet',
    },
    {
      iconKey: svgMediumIcon.name,
      title: 'Medium',
      url: 'https://decentrnet.medium.com/',
    },
  ];

  constructor(
    svgIconRegistry: SvgIconRegistry,
  ) {
    svgIconRegistry.register([
      svgGithubIcon,
      svgLogoBlueIcon,
      svgMediumIcon,
      svgTelegramIcon,
      svgTwitterIcon,
    ]);
  }
}
