import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from '@angular/core';
import { SvgIconRegistry } from '@ngneat/svg-icon';
import { BondStatus, Validator } from 'decentr-js';

import { Breakpoint } from '@shared/directives/breakpoint';
import { svgUnbondedIcon } from '@shared/svg-icons/unbonded';
import { svgBondedIcon } from '@shared/svg-icons/bonded';
import { svgUnbondingIcon } from '@shared/svg-icons/unbonding';
import { VALIDATOR_STATUS_MAP } from './validator-status.definitions';

@Component({
  selector: 'app-validator-status',
  templateUrl: './validator-status.component.html',
  styleUrls: ['./validator-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValidatorStatusComponent implements OnInit {
  @Input() status: Validator['status'];

  @Input() shrinkBreakpoint: Breakpoint | undefined = Breakpoint.Mobile;

  @Input()
  @HostBinding('class.mod-filled')
  public filled = false;

  @HostBinding('class.mod-unbonded')
  public get isUnbonded(): boolean {
    return this.status === BondStatus.BOND_STATUS_UNBONDED;
  }

  @HostBinding('class.mod-unbonding')
  public get isUnbonding(): boolean {
    return this.status === BondStatus.BOND_STATUS_UNBONDING;
  }

  @HostBinding('class.mod-bonded')
  public get isBonded(): boolean {
    return this.status === BondStatus.BOND_STATUS_BONDED;
  }

  public breakpoint: typeof Breakpoint = Breakpoint;

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
    this.validatorStatusName = VALIDATOR_STATUS_MAP[this.status];
  }
}
