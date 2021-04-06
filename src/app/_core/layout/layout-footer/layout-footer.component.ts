import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { SvgIconRegistry } from '@ngneat/svg-icon';

import { svgGithubIcon } from '@shared/svg-icons/github';
import { svgLogoBlueIcon } from '@shared/svg-icons/logo-blue';
import { svgMediumIcon } from '@shared/svg-icons/medium';
import { svgTelegramIcon } from '@shared/svg-icons/telegram';
import { svgTwitterIcon } from '@shared/svg-icons/twitter';

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
  @Input() public gamma: 'black' | 'white' = 'black';

  @HostBinding('class') public get gammaClass(): string {
    return `mod-gamma-${this.gamma}`;
  }

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
