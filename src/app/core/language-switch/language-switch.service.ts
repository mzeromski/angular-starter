import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageSwitchService {
  public static readonly availableLanguages: string[] = ['en', 'pl'];

  public static readonly defaultLanguage: string = LanguageSwitchService.availableLanguages[0];

  private translateService: TranslateService = inject(TranslateService);

  public initLanguageFromLocalStorage(): void {
    const languageFromStorage: string | null = localStorage.getItem('language');
    if (
      languageFromStorage &&
      LanguageSwitchService.availableLanguages.includes(languageFromStorage)
    ) {
      this.setLanguage(languageFromStorage);
    }
  }

  public getCurrentLanguage(): string {
    if (
      this.translateService.currentLang &&
      this.translateService.currentLang !== LanguageSwitchService.defaultLanguage
    ) {
      return this.translateService.currentLang;
    }
    return LanguageSwitchService.defaultLanguage;
  }

  public setLanguage(languageId: string): void {
    if (LanguageSwitchService.availableLanguages.includes(languageId)) {
      this.translateService.use(languageId);
      localStorage.setItem('language', languageId);
    }
  }
}
