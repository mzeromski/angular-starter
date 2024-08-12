import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CardModule, TranslateModule],
  templateUrl: './index.component.html',
})
export class IndexComponent {}
