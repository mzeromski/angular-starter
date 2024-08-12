import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {
  APP_INITIALIZER,
  ApplicationConfig,
  importProvidersFrom,
  inject,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { routes } from './app.routes';
import { initializeTranslation, provideTranslation } from './config/httpLoaderFactory';
import { DarkModeSwitchService } from './core/dark-mode-switch/dark-mode-switch.service';
import { errorHandlerInterceptor } from './core/error-handler/error-handler.interceptor';
import { loaderInterceptor } from './core/loader/loader.interceptor';
import { LoaderService } from './core/loader/loader.service';

function initializeDarkModeTheme(): () => void {
  const darkModeSwitchService: DarkModeSwitchService = inject(DarkModeSwitchService);
  return () => {
    darkModeSwitchService.initDarkMode();
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom([TranslateModule.forRoot(provideTranslation())]),
    MessageService,
    LoaderService,
    provideAnimationsAsync(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptors([errorHandlerInterceptor, loaderInterceptor])),
    provideRouter(routes),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeDarkModeTheme,
      multi: true,
      deps: [DarkModeSwitchService],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeTranslation,
      multi: true,
      deps: [TranslateService],
    },
  ],
};
