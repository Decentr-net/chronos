import { ChangeDetectionStrategy, Component, Input, TrackByFunction } from '@angular/core';
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

  public validatorRoute: AppRoute = AppRoute.Validators;

  public columns: string[] = ['Validator', 'Status', 'Commission'];

  public trackByAddress: TrackByFunction<Validator> = ({}, { operator_address }) => operator_address;
}
