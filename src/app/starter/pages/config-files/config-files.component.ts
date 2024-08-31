import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-config-files',
  standalone: true,
  imports: [CardModule],
  templateUrl: './config-files.component.html',
})
export class ConfigFilesComponent {}
