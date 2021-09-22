import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { SvgIconsModule } from '@ngneat/svg-icon';

import { DropdownModule } from '@shared/directives/dropdown';
import { TypefaceModule } from '@shared/directives/typeface';
import { NetworkSelectorComponent } from './network-selector.component';

@NgModule({
  imports: [
    CommonModule,
    DropdownModule,
    MatMenuModule,
    SvgIconsModule,
    TypefaceModule,
  ],
  declarations: [
    NetworkSelectorComponent,
  ],
  exports: [
    NetworkSelectorComponent,
  ],
})
export class NetworkSelectorModule {
}
