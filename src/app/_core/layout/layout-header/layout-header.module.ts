import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { LayoutHeaderComponent } from './layout-header.component';
import { TuiModeModule } from '@taiga-ui/core';
import { TuiTabsModule } from '@taiga-ui/kit';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SvgIconsModule,
    TuiTabsModule,
    TuiModeModule,
    RouterModule,
  ],
  declarations: [LayoutHeaderComponent],
  exports: [LayoutHeaderComponent],
})
export class LayoutHeaderModule {
}
