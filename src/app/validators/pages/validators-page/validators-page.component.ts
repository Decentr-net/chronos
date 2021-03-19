import { Component, OnInit } from '@angular/core';
import { DecentrService } from '@core/services/decentr';
import { Observable } from 'rxjs';
import { Validator } from 'decentr-js';

@Component({
  selector: 'app-validators-page',
  templateUrl: './validators-page.component.html',
  styleUrls: ['./validators-page.component.scss']
})
export class ValidatorsPageComponent implements OnInit {

  validators$: Observable<Validator[]>;

  constructor(
    private decentrService: DecentrService,
  ) {
  }

  ngOnInit(): void {
    this.validators$ = this.decentrService.getValidators();
  }

}
