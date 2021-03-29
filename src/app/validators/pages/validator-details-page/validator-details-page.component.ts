import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { Validator } from 'decentr-js';

import { StakingService } from '@core/services/staking';
import { AppRoute } from '../../../app-route';

@Component({
  selector: 'app-validator-details-page',
  templateUrl: './validator-details-page.component.html',
  styleUrls: ['./validator-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValidatorDetailsPageComponent implements OnInit {
  public validatorDetails$: Observable<Validator>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private stakingService: StakingService,
  ) {
  }

  public ngOnInit(): void {
    this.validatorDetails$ = this.activatedRoute.params.pipe(
      mergeMap((params) => this.stakingService.getValidatorByAddress(params.operatorAddress)),
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
  }
}
