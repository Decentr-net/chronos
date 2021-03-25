import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Validator } from 'decentr-js';

import { StakingService } from '@core/services/staking';

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
    private stakingService: StakingService,
  ) {
  }

  public ngOnInit(): void {
    this.validatorDetails$ = this.activatedRoute.params.pipe(
      mergeMap((params) => this.stakingService.getValidatorByAddress(params.operatorAddress)),
    );
  }
}
