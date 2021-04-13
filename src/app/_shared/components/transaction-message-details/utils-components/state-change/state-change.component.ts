import { ChangeDetectionStrategy, Component, ContentChild } from '@angular/core';
import { SvgIconRegistry } from '@ngneat/svg-icon';

import { svgArrowRightIcon } from '@shared/svg-icons/arrow-right';
import { StateChangeFromDirective } from './state-change-from.directive';
import { StateChangeToDirective } from './state-change-to.directive';

@Component({
  selector: 'app-state-change',
  templateUrl: './state-change.component.html',
  styleUrls: ['./state-change.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StateChangeComponent {
  @ContentChild(StateChangeFromDirective) public from: StateChangeFromDirective;

  @ContentChild(StateChangeToDirective) public to: StateChangeToDirective;

  constructor(svgIconRegistry: SvgIconRegistry) {
    svgIconRegistry.register(svgArrowRightIcon);
  }
}
