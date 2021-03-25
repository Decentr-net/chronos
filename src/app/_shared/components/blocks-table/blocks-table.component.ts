import { ChangeDetectionStrategy, Component, Input, TrackByFunction } from '@angular/core';
import { Block } from 'decentr-js';

import { AppRoute } from '../../../app-route';

@Component({
  selector: 'app-blocks-table',
  templateUrl: './blocks-table.component.html',
  styleUrls: ['./blocks-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlocksTableComponent {
  @Input() data: Block[];

  public blocksRoute: AppRoute = AppRoute.Blocks;

  public columns: string[] = ['Height', 'Hash', 'Time'];

  public trackByHash: TrackByFunction<Block> = ({}, { block_id }) => block_id.hash;
}
