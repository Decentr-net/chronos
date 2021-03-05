import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { TuiTabsModule } from '@taiga-ui/kit';
import { TuiModeModule } from '@taiga-ui/core';

import { LayoutHeaderComponent } from './layout-header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SvgIconsModule,
    TuiModeModule,
    TuiTabsModule,
  ],
  declarations: [
    LayoutHeaderComponent,
  ],
  exports: [
    LayoutHeaderComponent,
  ],
})
export class LayoutHeaderModule {
}
