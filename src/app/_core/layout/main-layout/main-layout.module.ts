import { NgModule } from '@angular/core';
import { LayoutHeaderModule } from '../layout-header';
import { MainLayoutComponent } from './main-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
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
