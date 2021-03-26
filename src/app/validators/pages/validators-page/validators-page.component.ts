import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { Validator, ValidatorStatus } from 'decentr-js';

import { StakingService } from '@core/services/staking';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-validators-page',
  templateUrl: './validators-page.component.html',
  styleUrls: ['./validators-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValidatorsPageComponent implements OnInit {
  public validators$: Observable<Validator[]>;

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
