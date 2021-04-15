import { ChangeDetectionStrategy, Component, Input, TrackByFunction } from '@angular/core';
import { Block } from 'decentr-js';

import { AppRoute } from '../../../app-route';
import { Breakpoint } from '@shared/directives/breakpoint';

@Component({
  selector: 'app-blocks-table',
  templateUrl: './blocks-table.component.html',
  styleUrls: ['./blocks-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlocksTableComponent {
  @Input() data: Block[];
  @Input() hashSize: Record<Breakpoint.Desktop | Breakpoint.Mobile | Breakpoint.Tablet, number> = {
    [Breakpoint.Desktop]: 70,
    [Breakpoint.Tablet]: 50,
    [Breakpoint.Mobile]: 15,
  };

  public blocksRoute: AppRoute = AppRoute.Blocks;
  public breakpoint: typeof Breakpoint = Breakpoint;
  public columns: string[] = ['Height', 'Hash', 'Time'];

  public trackByHash: TrackByFunction<Block> = ({}, { block_id }) => block_id.hash;
}
