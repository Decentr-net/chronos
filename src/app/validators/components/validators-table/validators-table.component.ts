import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Validator } from 'decentr-js';

import { AppRoute } from '../../../app-route';

@Component({
  selector: 'app-validators-table',
  templateUrl: './validators-table.component.html',
  styleUrls: ['./validators-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValidatorsTableComponent {
  @Input() data: Validator[];

  public columns: string[] = ['Validator', 'Status', 'Commission'];

  getDetailsLink(operatorAddress: Validator['operator_address']): string[] {
    return ['/', AppRoute.Validators, operatorAddress];
  }
}
