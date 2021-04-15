import { NgModule } from '@angular/core';

import { TxMessageTypeLabelPipe } from './tx-message-type-label.pipe';

@NgModule({
  declarations: [
    TxMessageTypeLabelPipe,
  ],
  exports: [
    TxMessageTypeLabelPipe,
  ],
})
export class TxMessageTypeLabelModule {
}
