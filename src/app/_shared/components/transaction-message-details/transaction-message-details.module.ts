import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconsModule } from '@ngneat/svg-icon';

import { TypefaceModule } from '@shared/directives/typeface';
import { TRANSACTION_MESSAGE_DETAILS_COMPONENTS } from './details-components';
import { TRANSACTION_MESSAGE_DETAILS_UTILS_COMPONENTS } from './utils-components';
import { TransactionMessageDetailsComponent } from './transaction-message-details.component';

@NgModule({
  declarations: [
    TRANSACTION_MESSAGE_DETAILS_COMPONENTS,
    TRANSACTION_MESSAGE_DETAILS_UTILS_COMPONENTS,
    TransactionMessageDetailsComponent,
  ],
  imports: [
    CommonModule,
    TypefaceModule,
    SvgIconsModule,
  ],
  exports: [
    TRANSACTION_MESSAGE_DETAILS_COMPONENTS,
    TRANSACTION_MESSAGE_DETAILS_UTILS_COMPONENTS,
    TransactionMessageDetailsComponent,
  ],
})
export class TransactionMessageDetailsModule {
}
