import { JsonPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { Select } from 'primeng/select';
import { LanguageSwitchService } from './language-switch.service';

@Component({
  selector: 'app-language-switch',
  standalone: true,
  imports: [DropdownModule, FormsModule, TranslateModule, JsonPipe, NgIf, Select],
  templateUrl: './language-switch.component.html',
})
export class LanguageSwitchComponent {
  private languageSwitchService: LanguageSwitchService = inject(LanguageSwitchService);

  private flagConverter: Record<string, string> = { en: 'gb' };

  public readonly languages: MenuItem[] = LanguageSwitchService.availableLanguages.map(language => {
    return {
      label: `language-switch.${language}`,
      id: language,
      flag: this.flagConverter[language] ?? language,
    };
  });

  public currentLanguage: MenuItem = this.languages.filter(
    i => i.id === this.languageSwitchService.getCurrentLanguage()
  )![0];

  changeLanguage(): void {
    this.languageSwitchService.setLanguage(this.currentLanguage.id!);
  }
}
