import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoute } from './app-route';
import { MainLayoutComponent } from '@core/layout/main-layout/main-layout.component';

const ROUTES: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: AppRoute.Dashboard,
        pathMatch: 'full',
      },
      {
        path: AppRoute.Dashboard,
        loadChildren: () => import('./dashboard').then(m => m.DashboardModule),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
