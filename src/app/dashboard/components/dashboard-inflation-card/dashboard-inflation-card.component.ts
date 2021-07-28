import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-inflation-card',
  templateUrl: './dashboard-inflation-card.component.html',
  styleUrls: ['./dashboard-inflation-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardInflationCardComponent {
  @Input() public inflation: string;
}
