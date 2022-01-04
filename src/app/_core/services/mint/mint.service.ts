import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MintApiService } from './mint-api.service';

@Injectable({
  providedIn: 'root',
})
export class MintService {
  constructor(
    private mintApiService: MintApiService,
  ) {
  }

  public getInflation(): Observable<string> {
    return this.mintApiService.getInflation();
  }
}
