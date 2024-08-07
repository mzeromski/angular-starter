import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

@Component({
  selector: 'app-starter',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, CommonModule, FontAwesomeModule],
  templateUrl: './starter.component.html',
})
export class StarterComponent {
  public sidebarOpen?: boolean;
  public sidebarOpenIcon: IconDefinition = faBars;
}
