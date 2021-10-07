import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StdTxMessageType, StdTxMessageValue } from 'decentr-js';
import { Observable } from 'rxjs';
import { Breakpoint, BreakpointService } from '@shared/directives/breakpoint';

@Component({
  selector: 'app-begin-redelegate-details',
  templateUrl: './begin-redelegate-details.component.html',
  styleUrls: ['./begin-redelegate-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BeginRedelegateDetailsComponent implements OnInit {
  @Input() public details: StdTxMessageValue<StdTxMessageType.CosmosBeginRedelegate>;

  public isTablet$: Observable<boolean>;

  constructor(
    private breakpointService: BreakpointService,
  ) {
  }

  public ngOnInit(): void {
    this.isTablet$ = this.breakpointService.observe(Breakpoint.Tablet);
  }
}
