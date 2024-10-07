import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard'; 

export const routes: Routes = [
  { path: '', redirectTo: 'panoramica', pathMatch: 'full' },
  { path: 'panoramica', loadComponent: () => import('./cpms/features/panoramica/panoramica.component').then(m => m.PanoramicaComponent),
    children: [
      { path: '', redirectTo: 'location', pathMatch: 'full' },
      { path: 'location', loadComponent: () => import('./cpms/features/locations/locations.component').then(comp => comp.LocationsComponent), canActivate: [AuthGuard] }
    ]
  },
  { path: 'login', loadComponent: () => import('./cpms/features/login/login.component').then(comp => comp.LoginComponent) }
];
