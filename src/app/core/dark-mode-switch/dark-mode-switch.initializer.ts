import { inject } from '@angular/core';
import { DarkModeSwitchService } from './dark-mode-switch.service';

export function initializeDarkModeTheme(): () => void {
  const darkModeSwitchService: DarkModeSwitchService = inject(DarkModeSwitchService);
  return () => {
    darkModeSwitchService.initDarkMode();
  };
}
