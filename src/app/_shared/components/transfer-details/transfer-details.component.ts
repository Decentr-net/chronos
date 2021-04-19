import { ChangeDetectionStrategy, Component, ContentChild, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SvgIconRegistry } from '@ngneat/svg-icon';

import { Breakpoint, BreakpointService } from '@shared/directives/breakpoint';
import { svgArrowRightIcon } from '@shared/svg-icons/arrow-right';
import { TransferDetailsFromDirective } from './transfer-details-from.directive';
import { TransferDetailsToDirective } from './transfer-details-to.directive';

@Component({
  selector: 'app-transfer-details',
  templateUrl: './transfer-details.component.html',
  styleUrls: ['./transfer-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransferDetailsComponent implements OnInit {
  @ContentChild(TransferDetailsFromDirective) public from: TransferDetailsFromDirective;

  @ContentChild(TransferDetailsToDirective) public to: TransferDetailsToDirective;

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
