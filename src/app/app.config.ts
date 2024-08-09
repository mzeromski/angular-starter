import { provideHttpClient } from '@angular/common/http';
import {
  APP_INITIALIZER,
  ApplicationConfig,
  inject,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { DarkModeSwitchService } from './core/dark-mode-switch/dark-mode-switch.service';

function initializeDarkModeTheme(): () => void {
  const darkModeSwitchService: DarkModeSwitchService = inject(DarkModeSwitchService);
  return () => {
    darkModeSwitchService.initDarkMode();
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideRouter(routes),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeDarkModeTheme,
      multi: true,
      deps: [DarkModeSwitchService],
    },
  ],
};
