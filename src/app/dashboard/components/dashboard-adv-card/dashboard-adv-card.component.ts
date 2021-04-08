import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-adv-card',
  templateUrl: './dashboard-adv-card.component.html',
  styleUrls: ['./dashboard-adv-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardAdvCardComponent {
  @Input() public adv: number;
}
