import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { StarterRoutesConfig } from '../../starter-routes.config';

interface SidebarPage {
  name: string;
  path: string;
  icon: IconDefinition;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  public readonly pages: SidebarPage[] = [
    { name: 'About', path: StarterRoutesConfig.PAGES_ABOUT, icon: faCoffee },
    { name: 'Index', path: StarterRoutesConfig.PAGES_INDEX, icon: faCoffee },
  ];
}
