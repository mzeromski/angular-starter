import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CardModule],
  templateUrl: './index.component.html',
})
export class IndexComponent {}
