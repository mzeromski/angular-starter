import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CardModule } from 'primeng/card';
import { SlugifyPipe } from '../../../core/slugify/slugify.pipe';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CardModule, TranslateModule, SlugifyPipe, NgForOf],
  templateUrl: './index.component.html',
})
export class IndexComponent {}
