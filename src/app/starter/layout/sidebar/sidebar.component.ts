import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCoffee,
  faDashboard,
  faHandsBound,
  faSignIn,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { StarterRoutesConfig } from '../../starter-routes.config';
import { MenuItemsComponent } from '../menu-items/menu-items.component';
import { SidebarPage } from './sidebar-page';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule, MenuItemsComponent],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  public readonly pages: SidebarPage[] = [
    { name: 'About', path: StarterRoutesConfig.PAGES_ABOUT, icon: faHandsBound, text: 'PRO' },
    {
      name: 'Index',
      path: StarterRoutesConfig.PAGES_INDEX,
      icon: faDashboard,
      childs: [
        { name: 'About', path: StarterRoutesConfig.PAGES_ABOUT, icon: faCoffee, number: 78 },
        { name: 'About', path: StarterRoutesConfig.PAGES_ABOUT, icon: faCoffee },
      ],
    },
    { name: 'Sign in', path: StarterRoutesConfig.PAGES_ABOUT, icon: faSignIn },
    { name: 'Sign out', path: StarterRoutesConfig.PAGES_ABOUT, icon: faSignOut },
  ];
}
