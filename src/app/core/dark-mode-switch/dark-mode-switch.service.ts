import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkModeSwitchService {
  private darkMode: boolean = false;

  switchDarkMode(): void {
    this.setDarkMode(!this.darkMode);
  }

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
      document.querySelector('body')!.classList.add('dark');
      this.darkMode = true;
    } else {
      document.querySelector('html')!.classList.remove('dark');
      document.querySelector('body')!.classList.remove('dark');

      this.darkMode = false;
    }
  }
}
