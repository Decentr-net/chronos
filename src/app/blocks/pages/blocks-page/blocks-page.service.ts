import { Injectable } from '@angular/core';
import { DecentrService } from '@core/services/decentr';
import { Observable } from 'rxjs';
import { Block } from 'decentr-js';
import { map, switchMap } from 'rxjs/operators';
import { sortByHeight } from '@shared/utils/blockchain';

@Injectable()
export class BlocksPageService {

  constructor(
    private decentrService: DecentrService
  ) {
  }

  public getBlocks(days: number): Observable<Block[]> {
    return this.decentrService.getLatestBlock().pipe(
      switchMap(blockResponse => this.decentrService.getBlocks(blockResponse.height, days)),
      map(block => block.sort(sortByHeight)),
    );
  }
}
