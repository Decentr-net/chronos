import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, combineLatest, forkJoin, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { BondStatus } from 'decentr-js';
import { Sort } from '@angular/material/sort';

import { Breakpoint } from '@shared/directives/breakpoint';
import { buildValidatorDefinition } from '@shared/utils/build-validator';
import { StakingService } from '@core/services/staking';
import { TitleService } from '@core/services/title';
import { ValidatorDefinition } from '@shared/models/validator/validator';

@Component({
  selector: 'app-validators-page',
  templateUrl: './validators-page.component.html',
  styleUrls: ['./validators-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValidatorsPageComponent implements OnInit {
  public validators$: Observable<ValidatorDefinition[]>;

  public validatorsSort: BehaviorSubject<Sort> = new BehaviorSubject(undefined);

  public breakpoint: typeof Breakpoint = Breakpoint;

  public onlyBondedFormControl: FormControl = new FormControl(false);

  constructor(
    private stakingService: StakingService,
    private titleService: TitleService,
  ) {
  }

  public ngOnInit(): void {
    this.titleService.setTitle('Validators');

    const onlyBonded$ = this.onlyBondedFormControl.valueChanges.pipe(
      startWith(this.onlyBondedFormControl.value),
    );

    this.validators$ = combineLatest([
      this.getValidators(),
      onlyBonded$,
      this.validatorsSort,
    ]).pipe(
      map(([validators, onlyBonded, sort]) => {
        return validators
          .filter(({ status }) => !onlyBonded || status === BondStatus.BOND_STATUS_BONDED)
          .sort((left: ValidatorDefinition, right: ValidatorDefinition) => {
            if (!sort || !sort.direction) {
              return 0;
            }

            const direction = sort.direction === 'asc' ? 1 : -1;

            switch (sort.active as keyof ValidatorDefinition) {
              case 'commission':
              case 'tokens':
              case 'status': return (left[sort.active] - right[sort.active]) * direction;
              case 'name': return (left[sort.active] as string).localeCompare(right[sort.active] as string) * direction;
              default: return 0;
            }
          });
      }),
    );
  }

  public sort(sort: Sort): void {
    this.validatorsSort.next(sort);
  }

  private getValidators(): Observable<ValidatorDefinition[]> {
    return forkJoin([
      this.stakingService.getValidators('BOND_STATUS_BONDED'),
      this.stakingService.getValidators('BOND_STATUS_UNBONDING'),
      this.stakingService.getValidators('BOND_STATUS_UNBONDED'),
      this.stakingService.getPool(),
    ]).pipe(
      map(([bonded, unbonding, unbonded, pool]) => [...bonded, ...unbonding, ...unbonded]
        .map((validator) => buildValidatorDefinition(validator, pool))),
    );
  }
}
