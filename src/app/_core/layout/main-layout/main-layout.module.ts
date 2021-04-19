import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutHeaderModule } from '../layout-header';
import { LayoutFooterModule } from '../layout-footer';
import { MainLayoutComponent } from './main-layout.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
  imports: [
    LayoutFooterModule,
    LayoutHeaderModule,
    PerfectScrollbarModule,
    RouterModule,
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
