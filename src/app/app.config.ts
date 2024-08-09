import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {
  APP_INITIALIZER,
  ApplicationConfig,
  inject,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { MessageService } from 'primeng/api';
import { routes } from './app.routes';
import { DarkModeSwitchService } from './core/dark-mode-switch/dark-mode-switch.service';
import { errorHandlerInterceptor } from './core/error-handler/error-handler.interceptor';

function initializeDarkModeTheme(): () => void {
  const darkModeSwitchService: DarkModeSwitchService = inject(DarkModeSwitchService);
  return () => {
    darkModeSwitchService.initDarkMode();
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    MessageService,
    provideAnimationsAsync(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptors([errorHandlerInterceptor])),
    provideRouter(routes),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeDarkModeTheme,
      multi: true,
      deps: [DarkModeSwitchService],
    },
  ],
};
