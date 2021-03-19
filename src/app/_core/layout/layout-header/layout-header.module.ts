import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { TuiTabsModule } from '@taiga-ui/kit';
import { TuiModeModule } from '@taiga-ui/core';

import { HEADER_COMPONENTS } from './components';
import { LayoutHeaderComponent } from './layout-header.component';
import { TypefaceModule } from '@shared/directives/typeface';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SvgIconsModule,
    TuiModeModule,
    TuiTabsModule,
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
