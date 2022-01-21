import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TxMessageValue, TxMessageTypeUrl } from 'decentr-js';
import { Observable } from 'rxjs';

import { Breakpoint, BreakpointService } from '@shared/directives/breakpoint';

@Component({
  selector: 'app-undelegate-details',
  templateUrl: './undelegate-details.component.html',
  styleUrls: ['./undelegate-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UndelegateDetailsComponent implements OnInit {
  @Input() public details: TxMessageValue<TxMessageTypeUrl.StakingUndelegate>;

  public isTablet$: Observable<boolean>;

  constructor(
    private breakpointService: BreakpointService,
  ) {
  }

  public ngOnInit(): void {
    this.isTablet$ = this.breakpointService.observe(Breakpoint.Tablet);
  }
}
