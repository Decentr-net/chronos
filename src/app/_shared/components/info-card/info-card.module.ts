import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from '@shared/components/info-card/info-card.component';
import { TuiIslandModule } from '@taiga-ui/kit';
import { TypefaceModule } from '@shared/directives/typeface';

@NgModule({
  imports: [
    CommonModule,
    TuiIslandModule,
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
