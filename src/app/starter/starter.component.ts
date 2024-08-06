import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

@Component({
  selector: 'app-starter',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './starter.component.html',
})
export class StarterComponent {}
