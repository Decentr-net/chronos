import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconsModule } from '@ngneat/svg-icon';

import { DetailsTableModule } from '@shared/components/details-table';
import { TransferDetailsModule } from '@shared/components/transfer-details';
import { BreakpointModule } from '@shared/directives/breakpoint';
import { TypefaceModule } from '@shared/directives/typeface';
import { TRANSACTION_MESSAGE_DETAILS_COMPONENTS } from './details-components';
import { TransactionMessageDetailsComponent } from './transaction-message-details.component';

@NgModule({
  declarations: [
    TRANSACTION_MESSAGE_DETAILS_COMPONENTS,
    TransactionMessageDetailsComponent,
  ],
  imports: [
    BreakpointModule,
    CommonModule,
    DetailsTableModule,
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
