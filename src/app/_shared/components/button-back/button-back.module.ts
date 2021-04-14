import { NgModule } from '@angular/core';
import { SvgIconsModule } from '@ngneat/svg-icon';

import { ButtonBackComponent } from './button-back.component';

@NgModule({
  declarations: [
    ButtonBackComponent,
  ],
  imports: [
    SvgIconsModule,
  ],
  exports: [
    ButtonBackComponent,
  ],
})
export class ButtonBackModule {
}
