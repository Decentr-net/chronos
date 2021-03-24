import { NgModule } from '@angular/core';
import { LayoutHeaderModule } from '../layout-header';
import { MainLayoutComponent } from './main-layout.component';
import { RouterModule } from '@angular/router';
import { LayoutFooterModule } from '@core/layout/layout-footer';

@NgModule({
  imports: [
    LayoutFooterModule,
    LayoutHeaderModule,
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
