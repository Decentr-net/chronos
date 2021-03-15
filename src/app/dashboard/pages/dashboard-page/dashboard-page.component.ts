import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CurrencyService } from '@core/services/currency';
import { DecentrService } from '@core/services/decentr';
import { BlockHeader, Pool } from 'decentr-js';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPageComponent implements OnInit {

  stats: any;

  bondedTokens: Pool;
  latestBlock: Pick<BlockHeader, 'height' | 'time'>;

  constructor(
    private currencyService: CurrencyService,
    private decentrService: DecentrService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {
  }

  ngOnInit(): void {
    this.currencyService.getDecentCoinRateHistory(1).subscribe(res => {
      this.stats = res;
      this.changeDetectorRef.detectChanges();
    });

    this.decentrService.getPool().subscribe(res => {
      this.bondedTokens = res;
      this.changeDetectorRef.detectChanges();
    });

    this.decentrService.getLatestBlock().subscribe(latestBlock => {
      this.latestBlock = latestBlock;
      this.changeDetectorRef.detectChanges();
    });
  }
}
