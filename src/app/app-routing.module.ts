import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './_core/layout/main-layout';
import { AppRoute } from './app-route';

const routes: Routes = [
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
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
