import { ChangeDetectionStrategy, Component, ContentChild, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SvgIconRegistry } from '@ngneat/svg-icon';

import { Breakpoint, BreakpointService } from '@shared/directives/breakpoint';
import { svgArrowRightIcon } from '@shared/svg-icons/arrow-right';
import { StateChangeFromDirective } from './state-change-from.directive';
import { StateChangeToDirective } from './state-change-to.directive';

@Component({
  selector: 'app-state-change',
  templateUrl: './state-change.component.html',
  styleUrls: ['./state-change.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StateChangeComponent implements OnInit {
  @ContentChild(StateChangeFromDirective) public from: StateChangeFromDirective;

  @ContentChild(StateChangeToDirective) public to: StateChangeToDirective;

  public isTablet$: Observable<boolean>;

  constructor(
    private breakpointService: BreakpointService,
    svgIconRegistry: SvgIconRegistry,
  ) {
    svgIconRegistry.register(svgArrowRightIcon);
  }

  public ngOnInit(): void {
    this.isTablet$ = this.breakpointService.observe(Breakpoint.Tablet);
  }
}
