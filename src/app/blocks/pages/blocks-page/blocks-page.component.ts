import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Block } from 'decentr-js';

import { ONE_SECOND } from '@shared/utils/date';
import { BlocksService } from '@core/services/blocks';

@Component({
  selector: 'app-blocks-page',
  templateUrl: './blocks-page.component.html',
  styleUrls: ['./blocks-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlocksPageComponent implements OnInit {
  blocks$: Observable<Block[]>;

  constructor(
    private blocksService: BlocksService,
  ) {
  }

  public ngOnInit(): void {
    this.blocks$ = this.blocksService.getLatestBlocksLive(50, ONE_SECOND * 10);
  }
}
