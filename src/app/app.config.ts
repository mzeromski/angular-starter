import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {
  APP_INITIALIZER,
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { routes } from './app.routes';
import { initializeTranslation, provideTranslation } from './config/httpLoaderFactory';
import { initializeDarkModeTheme } from './core/dark-mode-switch/dark-mode-switch.initializer';
import { DarkModeSwitchService } from './core/dark-mode-switch/dark-mode-switch.service';
import { errorHandlerInterceptor } from './core/error-handler/error-handler.interceptor';
import { loaderInterceptor } from './core/loader/loader.interceptor';
import { LoaderService } from './core/loader/loader.service';
import { initializeState } from './core/simple-state/state.initializer';
import { StateService } from './core/simple-state/state.service';
import { initializeLayoutConfig } from './starter/layout/config/layout-config.initializer';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom([TranslateModule.forRoot(provideTranslation())]),
    MessageService,
    LoaderService,
    StateService,
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
      useFactory: initializeLayoutConfig,
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeTranslation,
      multi: true,
      deps: [TranslateService],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeState,
      multi: true,
      deps: [StateService],
    },
  ],
};
