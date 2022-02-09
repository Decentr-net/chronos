import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { MatSortModule } from '@angular/material/sort';

import { TypefaceModule } from '@shared/directives/typeface';
import { DataTableComponent } from './data-table.component';
import { DataTableColumnDefDirective } from './data-table-column-def.directive';

@NgModule({
  declarations: [
    DataTableColumnDefDirective,
    DataTableComponent,
  ],
  imports: [
    CdkTableModule,
    CommonModule,
    MatSortModule,
    TypefaceModule,
  ],
  exports: [
    DataTableComponent,
    DataTableColumnDefDirective,
  ],
})
export class DataTableModule {
}
