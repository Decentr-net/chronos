import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StdTxMessageType, StdTxMessageValue } from 'decentr-js';
import { Observable } from 'rxjs';
import { Breakpoint, BreakpointService } from '@shared/directives/breakpoint';

@Component({
  selector: 'app-send-details',
  templateUrl: './send-details.component.html',
  styleUrls: ['./send-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SendDetailsComponent implements OnInit {
  @Input() public details: StdTxMessageValue<StdTxMessageType.CosmosSend>;

  public isTablet$: Observable<boolean>;

  constructor(
    private breakpointService: BreakpointService,
  ) {
  }

  public ngOnInit(): void {
    this.isTablet$ = this.breakpointService.observe(Breakpoint.Tablet);
  }
}
