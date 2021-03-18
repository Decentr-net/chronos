import { NgModule } from '@angular/core';
import { TransactionsTableComponent } from './transactions-table.component';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { TuiButtonModule, TuiLinkModule } from '@taiga-ui/core';
import { CommonModule } from '@angular/common';
import { DateAgoModule } from '@shared/pipes/date-ago';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    TuiTableModule,
    TuiButtonModule,
    CommonModule,
    DateAgoModule,
    RouterModule,
    TuiLinkModule,
  ],
  declarations: [
    TransactionsTableComponent,
  ],
  exports: [
    TransactionsTableComponent,
  ],
})
export class TransactionsTableModule {
}
