import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DarkModeSwitchComponent } from '../../../core/dark-mode-switch/dark-mode-switch.component';
import { LanguageSwitchComponent } from '../../../core/language-switch/language-switch.component';
import { ThemeSelectorComponent } from '../theme-selector/theme-selector/theme-selector.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    DarkModeSwitchComponent,
    RouterLink,
    RouterLinkActive,
    LanguageSwitchComponent,
    ThemeSelectorComponent,
  ],
  templateUrl: './nav.component.html',
})
export class NavComponent {}
