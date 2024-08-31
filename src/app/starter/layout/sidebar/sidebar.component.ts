import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCircle,
  faCoffee,
  faCog,
  faDashboard,
  faInfo,
  faLanguage,
  faLegal,
  faSave,
  faSignIn,
  faSignOut,
  faStaffSnake,
  faStop,
  faWarning,
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
    { name: 'Starter', path: StarterRoutesConfig.PAGES_INDEX, icon: faInfo, text: 'PRO' },

    { name: 'About', path: StarterRoutesConfig.PAGES_ABOUT, icon: faCircle, text: 'PRO' },

    { name: 'Config files', path: StarterRoutesConfig.PAGES_CONFIG_FILES, icon: faCog },
    { name: 'Cache test', path: StarterRoutesConfig.PAGES_CACHE, icon: faSave },
    {
      name: 'Sub menu',
      path: 'notExist',
      icon: faDashboard,
      childs: [
        {
          name: 'Submenu Page 1',
          path: 'notExist1',
          icon: faCoffee,
          number: 78,
        },
        { name: 'Submenu page 2', path: 'notExist2', icon: faStaffSnake },
      ],
    },
    { name: 'Licences', path: StarterRoutesConfig.PAGES_LICENCES, icon: faLegal },
    { name: 'Error init', path: StarterRoutesConfig.PAGES_ERROR_INIT, icon: faWarning },
    { name: 'Not found page', path: 'notFound' + Math.random(), icon: faStop },
    { name: 'Translate change', path: StarterRoutesConfig.PAGES_TRANSLATE, icon: faLanguage },
    { name: 'Sign in', path: StarterRoutesConfig.PAGES_SIGN_IN, icon: faSignIn },
    { name: 'Sign out', path: StarterRoutesConfig.PAGES_SIGN_OUT, icon: faSignOut },
  ];
}
