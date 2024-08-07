import { Component } from '@angular/core';
import { DarkModeSwitchComponent } from '../../../core/dark-mode-switch/dark-mode-switch.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [DarkModeSwitchComponent],
  templateUrl: './nav.component.html',
})
export class NavComponent {}
