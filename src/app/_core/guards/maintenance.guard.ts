import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ConfigurationService } from '@core/services/configuration';
import { AppRoute } from '../../app-route';

@Injectable()
export class MaintenanceGuard implements CanActivate {
  constructor(
    private configurationService: ConfigurationService,
    private router: Router,
  ) {
  }

  public canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    if (route.url.toString() === AppRoute.Maintenance) {
      this.configurationService.forceUpdate();

      return this.configurationService.getMaintenanceStatus().pipe(
        catchError(() => of(true)),
        map((isMaintenance) => isMaintenance || this.router.createUrlTree(['/'])),
      );
    } else {
      return this.configurationService.getMaintenanceStatus().pipe(
        catchError(() => of(true)),
        map((isMaintenance) => !isMaintenance || this.router.createUrlTree(['/', AppRoute.Maintenance])),
      );
    }
  }
}
