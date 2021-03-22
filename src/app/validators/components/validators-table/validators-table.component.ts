import { Component, Input } from '@angular/core';
import { Validator } from 'decentr-js';
import { AppRoute } from '../../../app-route';

@Component({
  selector: 'app-validators-table',
  templateUrl: './validators-table.component.html',
  styleUrls: ['./validators-table.component.scss']
})
export class ValidatorsTableComponent {

  @Input() data: Validator[] = [];
  columns: string[] = ['Validator', 'Status', 'Commission'];

  getValidatorDetailsLink(operatorAddress: Validator['operator_address']): string[] {
    return [`/${AppRoute.Validators}`, operatorAddress];
  }
}
