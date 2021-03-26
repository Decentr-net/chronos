import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-ddv-card',
  templateUrl: './dashboard-ddv-card.component.html',
  styleUrls: ['./dashboard-ddv-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardDdvCardComponent {
  @Input() public ddv: number;
}