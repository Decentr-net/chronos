import { NgModule } from '@angular/core';

import { LayoutHeaderModule } from '../layout-header';
import { LayoutFooterModule } from '../layout-footer';
import { MainLayoutComponent } from './main-layout.component';

@NgModule({
  imports: [
    LayoutFooterModule,
    LayoutHeaderModule,
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
