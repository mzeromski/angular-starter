import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CardModule, TranslateModule],
  templateUrl: './about.component.html',
})
export class AboutComponent {}
