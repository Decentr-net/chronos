import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StdTxMessageType, StdTxMessageValue } from 'decentr-js';
import { Breakpoint, BreakpointService } from '@shared/directives/breakpoint';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-validator-details',
  templateUrl: './create-validator-details.component.html',
  styleUrls: ['./create-validator-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateValidatorDetailsComponent implements OnInit {
  @Input() public details: StdTxMessageValue<StdTxMessageType.CosmosCreateValidator>;

  public isTablet$: Observable<boolean>;

  constructor(
    private breakpointService: BreakpointService,
  ) {
  }

  public ngOnInit(): void {
    this.isTablet$ = this.breakpointService.observe(Breakpoint.Tablet);
  }
}
