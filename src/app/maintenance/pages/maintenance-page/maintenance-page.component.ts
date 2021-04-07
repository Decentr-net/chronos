import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-maintenance-page',
  templateUrl: './maintenance-page.component.html',
  styleUrls: ['./maintenance-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaintenancePageComponent {
}
