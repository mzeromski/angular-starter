import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DarkModeSwitchService } from './core/dark-mode-switch/dark-mode-switch.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [DarkModeSwitchService],
})
export class AppComponent implements OnInit {
  title: string = 'angular-starter';
  public darkModeSwitchService: DarkModeSwitchService = inject(DarkModeSwitchService);

  ngOnInit(): void {
    this.darkModeSwitchService.initDarkMode();
  }
}
