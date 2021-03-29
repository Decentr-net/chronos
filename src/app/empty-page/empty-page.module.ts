import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypefaceModule } from '@shared/directives/typeface';
import { EmptyPageRoutingModule } from './empty-page-routing.module';
import { EmptyPageComponent } from './empty-page.component';

@NgModule({
  imports: [
    CommonModule,
    EmptyPageRoutingModule,
    TypefaceModule,
  ],
  declarations: [
    EmptyPageComponent
  ],
  exports: [
    EmptyPageComponent,
  ],
})
export class EmptyPageModule {
}
