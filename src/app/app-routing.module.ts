import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoute } from './app-route';
import { MainLayoutComponent } from '@core/layout/main-layout/main-layout.component';
import { MaintenanceGuard } from '@core/guards';

const ROUTES: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [
      MaintenanceGuard,
    ],
    children: [
      {
        path: '',
        redirectTo: AppRoute.Dashboard,
        pathMatch: 'full',
      },
      {
        path: AppRoute.Blocks,
        loadChildren: () => import('./blocks').then(m => m.BlocksModule),
      },
      {
        path: AppRoute.Dashboard,
        loadChildren: () => import('./dashboard').then(m => m.DashboardModule),
      },
      {
        path: AppRoute.Transactions,
        loadChildren: () => import('./transactions').then(m => m.TransactionsModule),
      },
      {
        path: AppRoute.Validators,
        loadChildren: () => import('./validators').then(m => m.ValidatorsModule),
      },
      {
        path: AppRoute.Empty,
        loadChildren: () => import('./empty-page').then((m) => m.EmptyPageModule),
      },
    ],
  },
  {
    path: AppRoute.Maintenance,
    loadChildren: () => import('./maintenance').then(m => m.MaintenanceModule),
    canActivate: [
      MaintenanceGuard,
    ],
  },
  {
    path: '**',
    redirectTo: AppRoute.Dashboard,
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
