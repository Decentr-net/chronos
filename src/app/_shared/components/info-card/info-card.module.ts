import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypefaceModule } from '@shared/directives/typeface';
import { InfoCardComponent } from './info-card.component';

@NgModule({
  imports: [
    CommonModule,
    TypefaceModule,
  ],
  declarations: [
    InfoCardComponent,
  ],
  exports: [
    InfoCardComponent,
  ],
})
export class InfoCardModule {
}
