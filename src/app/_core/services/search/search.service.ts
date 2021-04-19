import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { BlocksService } from '../blocks';
import { TransactionsService } from '../transactions';
import { BlockSearchItem, SearchResult, TransactionSearchItem } from './search.definitions';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(
    private blocksService: BlocksService,
    private transactionsService: TransactionsService,
  ) {
  }

  public search(value: string): Observable<SearchResult> {
    if (/^[0-9 ]+$/.test(value)) {
      return this.blocksService.getBlockByHeight(value.replace(' ', '')).pipe(
        catchError(() => of(null)),
        map((block) => new BlockSearchItem(block)),
      );
    }

    return this.transactionsService.getTransactionByHash(value).pipe(
      catchError(() => of(null)),
      map((tx) => new TransactionSearchItem(tx)),
    );
  }
}
