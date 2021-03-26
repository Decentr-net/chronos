import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';
import { BlockHeader } from 'decentr-js';

@Component({
  selector: 'app-dashboard-height-card',
  templateUrl: './dashboard-height-card.component.html',
  styleUrls: ['./dashboard-height-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardHeightCardComponent {
  @Input() public latestBlockHeader: BlockHeader;

  @Input() public loadingTemplate: TemplateRef<{}>;
}
