import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-translate',
  standalone: true,
  imports: [CardModule, ButtonModule, TranslateModule],
  templateUrl: './translate.component.html',
})
export class TranslateComponent {
  private translateService: TranslateService = inject(TranslateService);

  changeLanguage(): void {
    if (this.translateService.currentLang !== 'pl') {
      this.translateService.use('pl');
    } else {
      this.translateService.use('en');
    }
  }
}
