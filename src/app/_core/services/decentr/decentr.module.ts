import { NgModule } from '@angular/core';
import { DecentrApiService } from '@core/services/decentr/api';
import { DecentrService } from '@core/services/decentr/decentr.service';


@NgModule({
  providers: [
    DecentrApiService,
    DecentrService,
  ]
})
export class DecentrModule {
}
