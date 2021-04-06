import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PolymorpheusModule } from '@tinkoff/ng-polymorpheus';
import { RouterModule } from '@angular/router';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { TuiButtonModule, TuiDropdownModule, TuiModeModule } from '@taiga-ui/core';
import { TuiActiveZoneModule, TuiObscuredModule } from '@taiga-ui/cdk';
import { TuiTabsModule } from '@taiga-ui/kit';

import { BreakpointModule } from '@shared/directives/breakpoint';
import { DropdownModule } from '@shared/directives/dropdown';
import { TypefaceModule } from '@shared/directives/typeface';
import { LayoutFooterModule } from '@core/layout/layout-footer';
import { HEADER_COMPONENTS } from './components';
import { LayoutHeaderComponent } from './layout-header.component';

@NgModule({
  imports: [
    BreakpointModule,
    CommonModule,
    DropdownModule,
    LayoutFooterModule,
    PolymorpheusModule,
    ReactiveFormsModule,
    RouterModule,
    SvgIconsModule,
    TuiActiveZoneModule,
    TuiDropdownModule,
    TuiModeModule,
    TuiObscuredModule,
    TuiTabsModule,
    TypefaceModule,
    TuiButtonModule,
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
