import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgIconRegistry } from '@ngneat/svg-icon';

import { svgArrowLeftIcon } from '@shared/svg-icons/arrow-left';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'a[app-button-back]',
  templateUrl: './button-back.component.html',
  styleUrls: ['./button-back.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonBackComponent {
  constructor(
    svgIconRegistry: SvgIconRegistry,
  ) {
    svgIconRegistry.register(svgArrowLeftIcon);
  }
}
