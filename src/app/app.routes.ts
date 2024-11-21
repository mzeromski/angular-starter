import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./hello/hello.component').then(c => c.HelloComponent),
  },
  {
    path: 'starter',
    loadChildren: () => import('./starter/starter.routes').then(mod => mod.routes),
  },
];
