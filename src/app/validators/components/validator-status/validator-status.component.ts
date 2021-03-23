import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { Validator } from 'decentr-js';
import { ValidatorStatus } from '../../enum/validator-status.enum';
import { SvgIconRegistry } from '@ngneat/svg-icon';
import { svgUnbondedIcon } from '../../../svg-icons/unbonded';
import { svgBondedIcon } from '../../../svg-icons/bonded';
import { svgUnbondingIcon } from '../../../svg-icons/unbonding';

@Component({
  selector: 'app-validator-status',
  templateUrl: './validator-status.component.html',
  styleUrls: ['./validator-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValidatorStatusComponent {
  @Input() status: Validator['status'];
  public readonly validatorStatus: typeof ValidatorStatus = ValidatorStatus;

  constructor(
    svgIconRegistry: SvgIconRegistry,
  ) {
    svgIconRegistry.register([
      svgBondedIcon,
      svgUnbondedIcon,
      svgUnbondingIcon,
    ]);
  }
}
