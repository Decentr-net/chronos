import { ChangeDetectionStrategy, Component, HostBinding, Input, OnChanges } from '@angular/core';
import { SvgIconRegistry } from '@ngneat/svg-icon';

import { svgChartArrowDownIcon } from '../../svg-icons/chart-arrow-down';
import { svgChartArrowFlatIcon } from '../../svg-icons/chart-arrow-flat';
import { svgChartArrowUpIcon } from '../../svg-icons/chart-arrow-up';

@Component({
  selector: 'app-margin-label',
  templateUrl: './margin-label.component.html',
  styleUrls: ['./margin-label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarginLabelComponent implements OnChanges {
  @Input() public dayMargin: number;
  @Input() public digitsInfo: string;
  @Input() public showInPercent = true;

  @HostBinding('class.mod-negative')
  public get isNegative(): boolean {
    return this.dayMargin < 0;
  }

  @HostBinding('class.mod-neutral')
  public get isNeutral(): boolean {
    return this.dayMargin === 0;
  }

  @HostBinding('class.mod-positive')
  public get isPositive(): boolean {
    return this.dayMargin > 0;
  }

  public marginIcon: 'chart-arrow-down' | 'chart-arrow-flat' | 'chart-arrow-up';

  constructor(svgIconRegistry: SvgIconRegistry) {
    svgIconRegistry.register([
      svgChartArrowDownIcon,
      svgChartArrowFlatIcon,
      svgChartArrowUpIcon,
    ]);
  }

  ngOnChanges(): void {
    this.marginIcon = this.isNegative
      ? 'chart-arrow-down' : this.isPositive
        ? 'chart-arrow-up' : 'chart-arrow-flat';
  }
}
