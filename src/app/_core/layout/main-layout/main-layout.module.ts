import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutHeaderModule } from '../layout-header';
import { LayoutFooterModule } from '../layout-footer';
import { MainLayoutComponent } from './main-layout.component';
import { ScrollbarModule } from '@shared/components/scrollbar/scrollbar.module';

@NgModule({
  imports: [
    LayoutFooterModule,
    LayoutHeaderModule,
    RouterModule,
    ScrollbarModule,
  ],
  declarations: [
    MainLayoutComponent,
  ],
  exports: [
    MainLayoutComponent,
  ],
})
export class MainLayoutModule {
}
