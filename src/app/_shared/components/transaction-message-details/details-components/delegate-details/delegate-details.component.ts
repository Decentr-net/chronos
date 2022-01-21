import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TxMessageValue, TxMessageTypeUrl } from 'decentr-js';
import { Observable } from 'rxjs';
import { Breakpoint, BreakpointService } from '@shared/directives/breakpoint';

@Component({
  selector: 'app-delegate-details',
  templateUrl: './delegate-details.component.html',
  styleUrls: ['./delegate-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DelegateDetailsComponent implements OnInit {
  @Input() public details: TxMessageValue<TxMessageTypeUrl.StakingDelegate>;

  public isTablet$: Observable<boolean>;

  constructor(
    private breakpointService: BreakpointService,
  ) {
  }

  public ngOnInit(): void {
    this.isTablet$ = this.breakpointService.observe(Breakpoint.Tablet);
  }
}
