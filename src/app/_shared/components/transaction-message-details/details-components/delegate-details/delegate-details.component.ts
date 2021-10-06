import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StdTxMessageType, StdTxMessageValue } from 'decentr-js';
import { Observable } from 'rxjs';
import { Breakpoint, BreakpointService } from '@shared/directives/breakpoint';

@Component({
  selector: 'app-delegate-details',
  templateUrl: './delegate-details.component.html',
  styleUrls: ['./delegate-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DelegateDetailsComponent implements OnInit {
  @Input() public details: StdTxMessageValue<StdTxMessageType.CosmosDelegate>;

  public isTablet$: Observable<boolean>;

  constructor(
    private breakpointService: BreakpointService,
  ) {
  }

  public ngOnInit(): void {
    this.isTablet$ = this.breakpointService.observe(Breakpoint.Tablet);
  }
}
