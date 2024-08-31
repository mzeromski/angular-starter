import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CardModule } from 'primeng/card';
import { SlugifyPipe } from '../../../core/slugify/slugify.pipe';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CardModule, TranslateModule, SlugifyPipe],
  templateUrl: './index.component.html',
})
export class IndexComponent {}
