import { Injectable } from '@angular/core';

@Injectable()
export class DarkModeSwitchService {
  public setDarkMode(darkMode: boolean): void {
    localStorage.setItem('dark-mode', darkMode.toString());
    this.initDarkMode();
  }

  initDarkMode(): void {
    if (
      localStorage.getItem('dark-mode') === 'true' ||
      (!('dark-mode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.querySelector('html')!.classList.add('dark');
    } else {
      document.querySelector('html')!.classList.remove('dark');
    }
  }
}
