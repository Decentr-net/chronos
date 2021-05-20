import { NgModule } from '@angular/core';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { RouterModule } from '@angular/router';

import { LayoutHeaderModule } from '../layout-header';
import { LayoutFooterModule } from '../layout-footer';
import { MainLayoutComponent } from './main-layout.component';

@NgModule({
  imports: [
    LayoutFooterModule,
    LayoutHeaderModule,
    NgScrollbarModule,
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
