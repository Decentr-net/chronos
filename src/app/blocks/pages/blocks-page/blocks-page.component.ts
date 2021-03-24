import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { Block } from 'decentr-js';
import { switchMap } from 'rxjs/operators';

import { BlocksPageService } from './blocks-page.service';
import { ONE_SECOND } from '@shared/utils/date';

@Component({
  selector: 'app-blocks-page',
  templateUrl: './blocks-page.component.html',
  styleUrls: ['./blocks-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlocksPageComponent implements OnInit {
  blocks$: Observable<Block[]>;

  constructor(
    private blocksPageService: BlocksPageService,
  ) {
  }

  public ngOnInit(): void {
    this.blocks$ = timer(0, ONE_SECOND * 10).pipe(
      switchMap(() => this.blocksPageService.getBlocks(50)),
    );
  }
}
