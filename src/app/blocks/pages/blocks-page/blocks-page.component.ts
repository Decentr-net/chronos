import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Block } from 'decentr-js';

import { ONE_SECOND } from '@shared/utils/date';
import { BlocksService } from '@core/services/blocks';
import { Breakpoint, BreakpointService } from '@shared/directives/breakpoint';

@Component({
  selector: 'app-blocks-page',
  templateUrl: './blocks-page.component.html',
  styleUrls: ['./blocks-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlocksPageComponent implements OnInit {
  blocks$: Observable<Block[]>;

  public isMobile$: Observable<boolean>;

  constructor(
    private blocksService: BlocksService,
    private breakpointService: BreakpointService,
  ) {
  }

  public ngOnInit(): void {
    this.blocks$ = this.blocksService.getLatestBlocksLive(50, ONE_SECOND * 10);

    this.isMobile$ = this.breakpointService.observe(Breakpoint.Mobile);
  }
}
