import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconsModule } from '@ngneat/svg-icon';

import { LayoutFooterComponent } from '@core/layout/layout-footer/layout-footer.component';
import { RouterModule } from '@angular/router';
import { TypefaceModule } from '@shared/directives/typeface';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
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
