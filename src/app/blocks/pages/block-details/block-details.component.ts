import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { BlockDetailsService } from './block-details.service';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Block, Transaction, TXsSearchResponse } from 'decentr-js';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-bloc-details',
  templateUrl: './block-details.component.html',
  styleUrls: ['./block-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlockDetailsComponent implements OnInit {
  @HostBinding('class.container') public readonly useContainerClass: boolean = true;

  public blockDetails$: Observable<Block>;
  public blockTxs$: Observable<Transaction[]>;

  constructor(
    private route: ActivatedRoute,
    private blockDetailsService: BlockDetailsService,
  ) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      untilDestroyed(this),
    ).subscribe(params => {
      this.blockDetails$ = this.blockDetailsService.getBlockDetails(params.blockHeight);
      this.blockTxs$ = this.blockDetailsService.getBlockTxs(params.blockHeight);
    });
  }
}
