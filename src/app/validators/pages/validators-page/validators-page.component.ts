import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Validator, ValidatorStatus } from 'decentr-js';

import { Breakpoint } from '@shared/directives/breakpoint';
import { StakingService } from '@core/services/staking';

@Component({
  selector: 'app-validators-page',
  templateUrl: './validators-page.component.html',
  styleUrls: ['./validators-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValidatorsPageComponent implements OnInit {
  public validators$: Observable<Validator[]>;

  public breakpoint: typeof Breakpoint = Breakpoint;

  constructor(
    private stakingService: StakingService,
  ) {
  }

  public ngOnInit(): void {
    this.validators$ = forkJoin([
      this.stakingService.getValidators(),
      this.stakingService.getValidators({ status: ValidatorStatus.Unbonding }),
      this.stakingService.getValidators({ status: ValidatorStatus.Unbonded }),
    ]).pipe(
      map(([bonded, unbonding, unbonded]) => [...bonded, ...unbonding, ...unbonded]),
    );
  }
}
