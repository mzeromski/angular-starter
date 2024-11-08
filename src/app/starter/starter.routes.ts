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
      {
        path: StarterRoutesConfig.PAGES_CONFIG_FILES,
        loadComponent: () =>
          import('./pages/config-files/config-files.component').then(c => c.ConfigFilesComponent),
      },
      {
        path: StarterRoutesConfig.PAGES_LICENCES,
        loadComponent: () =>
          import('./pages/licences/licences.component').then(c => c.LicencesComponent),
      },
      {
        path: StarterRoutesConfig.PAGES_ERROR_INIT,
        loadComponent: () =>
          import('./pages/error-init/error-init.component').then(c => c.ErrorInitComponent),
      },
      {
        path: StarterRoutesConfig.PAGES_ERROR,
        loadComponent: () => import('./pages/error/error.component').then(c => c.ErrorComponent),
      },
      {
        path: StarterRoutesConfig.PAGES_TRANSLATE,
        loadComponent: () =>
          import('./pages/translate/translate.component').then(c => c.TranslateComponent),
      },
      {
        path: StarterRoutesConfig.PAGES_CACHE,
        loadComponent: () => import('./pages/cache/cache.component').then(c => c.CacheComponent),
      },
      {
        path: StarterRoutesConfig.PAGES_DEFER,
        loadComponent: () => import('./pages/defer/defer.component').then(c => c.DeferComponent),
      },
      {
        path: '**',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/notfound/notfound.component').then(c => c.NotfoundComponent),
      },
    ],
  },
];
