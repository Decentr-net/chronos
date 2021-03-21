import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { Block } from 'decentr-js';
import { switchMap } from 'rxjs/operators';
import { ONE_SECOND } from '@shared/utils/date';
import { BlocksPageService } from './blocks-page.service';

@Component({
  selector: 'app-blocks-page',
  templateUrl: './blocks-page.component.html',
  styleUrls: ['./blocks-page.component.scss']
})
export class BlocksPageComponent implements OnInit {

  blocks$: Observable<Block[]>;

  constructor(
    private blocksPageService: BlocksPageService,
  ) {
  }

  ngOnInit(): void {
    this.blocks$ = timer(0, ONE_SECOND * 10).pipe(
      switchMap(() => this.blocksPageService.getBlocks(50)),
    );
  }

  sortByHeight(a, b): any {
    return a.height < b.height ? 1 : -1;
  }
}
