import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';

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
    TypefaceModule,
  ],
  exports: [
    DataTableComponent,
    DataTableColumnDefDirective,
  ],
})
export class DataTableModule {
}
