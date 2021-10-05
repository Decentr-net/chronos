import { NgModule } from '@angular/core';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { SvgIconsModule } from '@ngneat/svg-icon';

import { TooltipModule } from '@shared/components/tooltip';
import { PageLinkComponent } from './page-link.component';

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
    TooltipModule,
  ],
})
export class PageLinkModule {
}
