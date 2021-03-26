import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from '@angular/core';
import { SvgIconRegistry } from '@ngneat/svg-icon';
import { Validator, ValidatorStatus } from 'decentr-js';

import { svgUnbondedIcon } from '@shared/svg-icons/unbonded';
import { svgBondedIcon } from '@shared/svg-icons/bonded';
import { svgUnbondingIcon } from '@shared/svg-icons/unbonding';

@Component({
  selector: 'app-validator-status',
  templateUrl: './validator-status.component.html',
  styleUrls: ['./validator-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValidatorStatusComponent implements OnInit {
  @Input() status: Validator['status'];

  @HostBinding('class.mod-unbonded')
  public get isUnbonded(): boolean {
    return this.status === ValidatorStatus.Unbonded;
  }

  @HostBinding('class.mod-unbonding')
  public get isUnbonding(): boolean {
    return this.status === ValidatorStatus.Unbonding;
  }

  @HostBinding('class.mod-bonded')
  public get isBonded(): boolean {
    return this.status === ValidatorStatus.Bonded;
  }

  public readonly validatorStatus: typeof ValidatorStatus = ValidatorStatus;
  public validatorStatusName: string;

  constructor(
    svgIconRegistry: SvgIconRegistry,
  ) {
    svgIconRegistry.register([
      svgBondedIcon,
      svgUnbondedIcon,
      svgUnbondingIcon,
    ]);
  }

  public ngOnInit(): void {
    this.validatorStatusName = this.validatorStatus[this.status];
  }
}
