import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, forkJoin, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Pool, Validator, ValidatorStatus } from 'decentr-js';

import { Breakpoint } from '@shared/directives/breakpoint';
import { StakingService } from '@core/services/staking';

@Component({
  selector: 'app-validators-page',
  templateUrl: './validators-page.component.html',
  styleUrls: ['./validators-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValidatorsPageComponent implements OnInit {
  public pool$: Observable<Pool>;
  public validators$: Observable<Validator[]>;

  public breakpoint: typeof Breakpoint = Breakpoint;

  public onlyBondedFormControl: FormControl = new FormControl(false);

  constructor(
    private stakingService: StakingService,
  ) {
  }

  public ngOnInit(): void {
    this.pool$ = this.stakingService.getPool();

    const onlyBonded$ = this.onlyBondedFormControl.valueChanges.pipe(
      startWith(this.onlyBondedFormControl.value),
    );

    this.validators$ = combineLatest([
      this.getValidators(),
      onlyBonded$,
    ]).pipe(
      map(([validators, onlyBonded]) => {
        return validators.filter(({ status }) => !onlyBonded || status === ValidatorStatus.Bonded);
      }),
    );
  }

  private getValidators(): Observable<Validator[]> {
    return forkJoin([
      this.stakingService.getValidators({ status: ValidatorStatus.Bonded }),
      this.stakingService.getValidators({ status: ValidatorStatus.Unbonding }),
      this.stakingService.getValidators({ status: ValidatorStatus.Unbonded }),
    ]).pipe(
      map(([bonded, unbonding, unbonded]) => [...bonded, ...unbonding, ...unbonded]),
    );
  }
}
