import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [CardModule],
  templateUrl: './notfound.component.html',
})
export class NotfoundComponent {}
