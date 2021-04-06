import { NgModule } from '@angular/core';

import { BreakpointDirective } from './breakpoint.directive';
import { BreakpointService } from './breakpoint.service';

@NgModule({
  declarations: [
    BreakpointDirective,
  ],
  exports: [
    BreakpointDirective,
  ],
  providers: [
    BreakpointService,
  ],
})
export class BreakpointModule {
}
