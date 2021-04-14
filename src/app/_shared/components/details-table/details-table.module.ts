import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypefaceModule } from '@shared/directives/typeface';
import { DetailsTableComponent } from './details-table.component';
import { DetailsTableCellDefDirective } from './details-table-cell-def.directive';

@NgModule({
  declarations: [
    DetailsTableComponent,
    DetailsTableCellDefDirective,
  ],
  imports: [
    CommonModule,
    TypefaceModule,
  ],
  exports: [
    DetailsTableComponent,
    DetailsTableCellDefDirective,
  ],
})
export class DetailsTableModule { }
