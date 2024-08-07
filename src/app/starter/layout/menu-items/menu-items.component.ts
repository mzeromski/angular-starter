import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarPage } from '../sidebar/sidebar-page';

@Component({
  selector: 'app-menu-items',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  templateUrl: './menu-items.component.html',
})
export class MenuItemsComponent {
  @Input() pages!: SidebarPage[];
  @Input() level!: number;
}
