import { Component, OnInit } from '@angular/core';
import { DecentrService } from '@core/services/decentr';
import { Observable } from 'rxjs';
import { Validator } from 'decentr-js';
import { ValidatorsPageService } from './validators-page.service';

@Component({
  selector: 'app-validators-page',
  templateUrl: './validators-page.component.html',
  styleUrls: ['./validators-page.component.scss']
})
export class ValidatorsPageComponent implements OnInit {

  validators$: Observable<Validator[]>;

  constructor(
    private validatorsPageService: ValidatorsPageService,
  ) {
  }

  ngOnInit(): void {
    this.validators$ = this.validatorsPageService.getValidators();
  }

}
