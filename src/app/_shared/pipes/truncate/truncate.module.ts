import { NgModule } from '@angular/core';

import { TruncatePipe } from '@shared/pipes/truncate/truncate.pipe';

@NgModule({
  declarations: [
    TruncatePipe,
  ],
  exports: [
    TruncatePipe,
  ],
})
export class TruncateModule {
}
