import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutFooterComponent } from '@core/layout/layout-footer/layout-footer.component';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { RouterModule } from '@angular/router';
import { TypefaceModule } from '@shared/directives/typeface';

@NgModule({
  imports: [
    CommonModule,
    SvgIconsModule,
    RouterModule,
    TypefaceModule,
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
