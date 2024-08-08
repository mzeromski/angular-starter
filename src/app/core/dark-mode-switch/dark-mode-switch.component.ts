import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMoon, faSun, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { DarkModeSwitchService } from './dark-mode-switch.service';

@Component({
  selector: 'app-dark-mode-switch',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './dark-mode-switch.component.html',
})
export class DarkModeSwitchComponent {
  public darkModeSwitchService: DarkModeSwitchService = inject(DarkModeSwitchService);

  public readonly iconDark: IconDefinition = faMoon;
  public readonly iconLight: IconDefinition = faSun;
}
