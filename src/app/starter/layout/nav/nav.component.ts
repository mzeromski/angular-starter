import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DarkModeSwitchComponent } from '../../../core/dark-mode-switch/dark-mode-switch.component';
import { LanguageSwitchComponent } from '../../../core/language-switch/language-switch.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [DarkModeSwitchComponent, RouterLink, RouterLinkActive, LanguageSwitchComponent],
  templateUrl: './nav.component.html',
})
export class NavComponent {}
