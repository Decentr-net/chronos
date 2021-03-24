import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Validator } from 'decentr-js';

import { DecentrService } from '@core/services/decentr';

@Component({
  selector: 'app-validator-details',
  templateUrl: './validator-details.component.html',
  styleUrls: ['./validator-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValidatorDetailsComponent implements OnInit {
  @HostBinding('class.container') public readonly useContainerClass: boolean = true;

  public validatorDetails$: Observable<Validator>;

  constructor(
    private decentrService: DecentrService,
    private route: ActivatedRoute,
  ) {
  }

  public ngOnInit(): void {
    this.validatorDetails$ = this.route.params.pipe(
      mergeMap((params) => this.decentrService.getValidatorByAddress(params.operatorAddress)),
    );
  }
}
