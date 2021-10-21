import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Block } from 'decentr-js';

import { Breakpoint } from '@shared/directives/breakpoint';
import { BlocksService } from '@core/services/blocks';
import { ONE_SECOND } from '@shared/utils/date';
import { TitleService } from '@core/services/title';

@Component({
  selector: 'app-blocks-page',
  templateUrl: './blocks-page.component.html',
  styleUrls: ['./blocks-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlocksPageComponent implements OnInit {
  blocks$: Observable<Block[]>;

  public breakpoint: typeof Breakpoint = Breakpoint;

  constructor(
    private blocksService: BlocksService,
    private titleService: TitleService,
  ) {
  }

  public ngOnInit(): void {
    this.titleService.setTitle('Blocks');

    this.blocks$ = this.blocksService.getLatestBlocksLive(50, ONE_SECOND * 10);
  }
}
