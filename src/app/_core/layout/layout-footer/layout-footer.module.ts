import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconsModule } from '@ngneat/svg-icon';

import { TypefaceModule } from '@shared/directives/typeface';
import { LayoutFooterComponent } from './layout-footer.component';

@NgModule({
  imports: [
    CommonModule,
    TypefaceModule,
    SvgIconsModule,
  ],
  declarations: [
    LayoutFooterComponent,
  ],
  exports: [
    LayoutFooterComponent,
  ],
})
export class LayoutFooterModule {
}
