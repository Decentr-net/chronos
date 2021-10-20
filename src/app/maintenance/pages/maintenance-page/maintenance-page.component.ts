import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SvgIconRegistry } from '@ngneat/svg-icon';

import { svgLogoIcon } from '@shared/svg-icons/logo';
import { TitleService } from '@core/services/title';

@Component({
  selector: 'app-maintenance-page',
  templateUrl: './maintenance-page.component.html',
  styleUrls: ['./maintenance-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaintenancePageComponent implements OnInit {

  constructor(
    svgIconRegistry: SvgIconRegistry,
    private titleService: TitleService,
  ) {
    svgIconRegistry.register([
      svgLogoIcon,
    ]);
  }

  public ngOnInit(): void {
    this.titleService.setTitle('Maintenance');
  }
}
