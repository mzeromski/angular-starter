// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguageSwitchService } from '../core/language-switch/language-switch.service';

const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (http: HttpClient) =>
  new TranslateHttpLoader(http, './assets/i18n/', '.json?v=v' + Math.random());

export const provideTranslation: () => {
  loader: {
    provide: typeof TranslateLoader;
    useFactory: (http: HttpClient) => TranslateHttpLoader;
    deps: [typeof HttpClient];
  };
} = () => ({
  loader: {
    provide: TranslateLoader,
    useFactory: httpLoaderFactory,
    deps: [HttpClient],
  },
});

export function initializeTranslation(): () => void {
  const translateService: TranslateService = inject(TranslateService);
  const languageSwitchService: LanguageSwitchService = inject(LanguageSwitchService);
  return () => {
    translateService.addLangs(LanguageSwitchService.availableLanguages);
    translateService.setDefaultLang(LanguageSwitchService.defaultLanguage);
    languageSwitchService.initLanguageFromLocalStorage();
  };
}
