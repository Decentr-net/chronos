import { Component, OnInit } from '@angular/core';
import { DecentrService } from '@core/services/decentr';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Validator } from 'decentr-js';
import { ValidatorDetailsService } from './validator-details.service';

@Component({
  selector: 'app-validator-details',
  templateUrl: './validator-details.component.html',
  styleUrls: ['./validator-details.component.scss']
})
export class ValidatorDetailsComponent implements OnInit {

  validatorDetails$: Observable<Validator>;

  constructor(
    private validatorDetailsService: ValidatorDetailsService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.validatorDetails$ = this.route.params.pipe(
      switchMap(params => this.validatorDetailsService.getValidatorDetails(params.operatorAddress))
    );
  }

}
