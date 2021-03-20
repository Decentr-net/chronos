import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Block } from 'decentr-js';

import { AppRoute } from '../../../app-route';

@Component({
  selector: 'app-blocks-table',
  templateUrl: './blocks-table.component.html',
  styleUrls: ['./blocks-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlocksTableComponent {
  @Input() data: Block[] = [];

  public columns: string[] = ['Height', 'Hash', 'Time'];

  getDetailsLink(param: string): string[] {
    return ['/', AppRoute.Blocks, param];
  }
}
