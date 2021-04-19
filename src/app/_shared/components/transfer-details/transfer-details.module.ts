import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconsModule } from '@ngneat/svg-icon';

import { TypefaceModule } from '@shared/directives/typeface';
import { TransferDetailsComponent } from './transfer-details.component';
import { TransferDetailsFromDirective } from './transfer-details-from.directive';
import { TransferDetailsToDirective } from './transfer-details-to.directive';

@NgModule({
  declarations: [
    TransferDetailsComponent,
    TransferDetailsFromDirective,
    TransferDetailsToDirective,
  ],
  imports: [
    CommonModule,
    SvgIconsModule,
    TypefaceModule,
  ],
  exports: [
    TransferDetailsComponent,
    TransferDetailsFromDirective,
    TransferDetailsToDirective,
  ],
})
export class TransferDetailsModule {
}
