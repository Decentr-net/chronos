import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StdTxMessageType, StdTxMessageValue } from 'decentr-js';
import { Observable } from 'rxjs';
import { Breakpoint, BreakpointService } from '@shared/directives/breakpoint';

@Component({
  selector: 'app-deposit-details',
  templateUrl: './deposit-details.component.html',
  styleUrls: ['./deposit-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepositDetailsComponent implements OnInit {
  @Input() public details: StdTxMessageValue<StdTxMessageType.CosmosDeposit>;

  public isTablet$: Observable<boolean>;

  constructor(
    private breakpointService: BreakpointService,
  ) {
  }

  public ngOnInit(): void {
    this.isTablet$ = this.breakpointService.observe(Breakpoint.Tablet);
  }
}
