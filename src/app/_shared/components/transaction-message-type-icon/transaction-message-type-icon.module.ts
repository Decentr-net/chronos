import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconsModule } from '@ngneat/svg-icon';

import { TransactionMessageTypeIconComponent } from './transaction-message-type-icon.component';

@NgModule({
  declarations: [
    TransactionMessageTypeIconComponent,
  ],
  imports: [
    CommonModule,
    SvgIconsModule,
  ],
  exports: [
    TransactionMessageTypeIconComponent,
  ],
})
export class TransactionMessageTypeIconModule {
}
