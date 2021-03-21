import { Component, OnInit } from '@angular/core';
import { DecentrService } from '@core/services/decentr';
import { Observable } from 'rxjs';
import { Block } from 'decentr-js';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-blocks-page',
  templateUrl: './blocks-page.component.html',
  styleUrls: ['./blocks-page.component.scss']
})
export class BlocksPageComponent implements OnInit {

  blocks$: Observable<Block[]>;

  constructor(
    private decentrService: DecentrService,
  ) {
  }

  ngOnInit(): void {
    this.blocks$ = this.decentrService.getLatestBlock().pipe(
      switchMap(blockResponse => this.decentrService.getBlocks(blockResponse.height, 50)
        .pipe(
          map(block => block.sort(this.sortByHeight))
        )
      )
    );
  }

  sortByHeight(a, b): any {
    return a.height < b.height ? 1 : -1;
  }
}
