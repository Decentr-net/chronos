import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, forkJoin, Observable } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';

import { Breakpoint, BreakpointService } from '@shared/directives/breakpoint';
import { buildValidatorDefinition } from '@shared/utils/build-validator';
import { StakingService } from '@core/services/staking';
import { AppRoute } from '../../../app-route';
import { TitleService } from '@core/services/title';
import { ValidatorDefinition } from '@shared/models/validator/validator';

@Component({
  selector: 'app-validator-details-page',
  templateUrl: './validator-details-page.component.html',
  styleUrls: ['./validator-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValidatorDetailsPageComponent implements OnInit {
  public validatorDetails$: Observable<ValidatorDefinition>;

  public isTablet$: Observable<boolean>;

  public readonly breakpoint: typeof Breakpoint = Breakpoint;

  constructor(
    private activatedRoute: ActivatedRoute,
    private breakpointService: BreakpointService,
    private router: Router,
    private stakingService: StakingService,
    private titleService: TitleService,
  ) {
  }

  public ngOnInit(): void {
    this.validatorDetails$ = this.activatedRoute.params.pipe(
      mergeMap((params) => forkJoin([
        this.stakingService.getValidatorByAddress(params.operatorAddress as string),
        this.stakingService.getPool(),
      ])),
      map(([validator, pool]) => buildValidatorDefinition(validator, pool)),
      tap((validator) => this.titleService.setTitle(`Validator - ${validator.name}`)),
      catchError(() => {
        this.router.navigate(['/', AppRoute.Empty], {
          skipLocationChange: true,
          state: {
            title: 'Validator not found',
          },
        });

        return EMPTY;
      }),
    );

    this.isTablet$ = this.breakpointService.observe(Breakpoint.Tablet);
  }
}
