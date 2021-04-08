import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SvgIconsModule } from '@ngneat/svg-icon';

import { BreakpointModule } from '@shared/directives/breakpoint';
import { DropdownModule } from '@shared/directives/dropdown';
import { TypefaceModule } from '@shared/directives/typeface';
import { LayoutFooterModule } from '../layout-footer';
import { HEADER_COMPONENTS } from './components';
import { LayoutHeaderComponent } from './layout-header.component';

@NgModule({
  imports: [
    BreakpointModule,
    CommonModule,
    DropdownModule,
    LayoutFooterModule,
    ReactiveFormsModule,
    RouterModule,
    SvgIconsModule,
    TypefaceModule,
  ],
  declarations: [
    HEADER_COMPONENTS,
    LayoutHeaderComponent,
  ],
  exports: [
    LayoutHeaderComponent,
  ],
})
export class LayoutHeaderModule {
}
