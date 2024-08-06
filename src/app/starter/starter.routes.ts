import { Routes } from '@angular/router';
import { StarterRoutesConfig } from './starter-routes.config';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./starter.component').then(c => c.StarterComponent),
    children: [
      {
        path: StarterRoutesConfig.PAGES_INDEX,
        loadComponent: () => import('./pages/index/index.component').then(c => c.IndexComponent),
      },
      {
        path: StarterRoutesConfig.PAGES_ABOUT,
        loadComponent: () => import('./pages/about/about.component').then(c => c.AboutComponent),
      },
      {
        path: StarterRoutesConfig.PAGES_CONTACT,
        loadComponent: () =>
          import('./pages/contact/contact.component').then(c => c.ContactComponent),
      },
    ],
  },
];