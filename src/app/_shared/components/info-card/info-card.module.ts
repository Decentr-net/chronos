import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from '@shared/components/info-card/info-card.component';
import { TuiIslandModule } from '@taiga-ui/kit';

@NgModule({
  imports: [
    CommonModule,
    TuiIslandModule,
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
