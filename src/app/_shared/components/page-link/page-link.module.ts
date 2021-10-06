import { NgModule } from '@angular/core';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { SvgIconsModule } from '@ngneat/svg-icon';

import { PageLinkComponent } from './page-link.component';
import { TypefaceModule } from '@shared/directives/typeface';

@NgModule({
  declarations: [
    PageLinkComponent,
  ],
  exports: [
    PageLinkComponent,
  ],
  imports: [
    ClipboardModule,
    CommonModule,
    SvgIconsModule,
    TypefaceModule,
  ],
})
export class PageLinkModule {
}
