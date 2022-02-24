import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TrackByFunction } from '@angular/core';
import { Sort } from '@angular/material/sort';

import { AppRoute } from '../../../app-route';
import { ValidatorDefinition } from '@shared/models/validator/validator';

@Component({
  selector: 'app-validators-table',
  templateUrl: './validators-table.component.html',
  styleUrls: ['./validators-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValidatorsTableComponent {
  @Input() data: ValidatorDefinition[];

  @Output() sortClick: EventEmitter<Sort> = new EventEmitter();

  public validatorRoute: AppRoute = AppRoute.Validators;

  public trackByAddress: TrackByFunction<ValidatorDefinition> = ({}, { address }) => address;
}
