import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';

import { DropdownDirective } from './dropdown.directive';

@NgModule({
  declarations: [
    DropdownDirective,
  ],
  imports: [
    OverlayModule,
  ],
  exports: [
    DropdownDirective,
  ],
})
export class DropdownModule {
}
