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
  columns: string[] = ['Height', 'Block Hash', 'Time'];

  getBlockDetailsLink(blockHash: string): string[] {
    return [`/${AppRoute.Blocks}`, blockHash];
  }
}
