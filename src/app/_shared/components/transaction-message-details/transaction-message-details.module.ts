import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconsModule } from '@ngneat/svg-icon';

import { BreakpointModule } from '@shared/directives/breakpoint';
import { DetailsTableModule } from '@shared/components/details-table';
import { LinkModule } from '@shared/directives/link';
import { NumberFormatModule } from '@shared/pipes/number-format';
import { TransactionMessageDetailsComponent } from './transaction-message-details.component';
import { TransferDetailsModule } from '@shared/components/transfer-details';
import { TypefaceModule } from '@shared/directives/typeface';
import { TRANSACTION_MESSAGE_DETAILS_COMPONENTS } from './details-components';

@NgModule({
  declarations: [
    TRANSACTION_MESSAGE_DETAILS_COMPONENTS,
    TransactionMessageDetailsComponent,
  ],
  imports: [
    BreakpointModule,
    CommonModule,
    DetailsTableModule,
    LinkModule,
    NumberFormatModule,
    TransferDetailsModule,
    TypefaceModule,
    SvgIconsModule,
  ],
  exports: [
    TRANSACTION_MESSAGE_DETAILS_COMPONENTS,
    TransactionMessageDetailsComponent,
  ],
})
export class TransactionMessageDetailsModule {
}
