import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-error-init',
  standalone: true,
  imports: [ButtonModule, CardModule],
  templateUrl: './error-init.component.html',
})
export class ErrorInitComponent {
  public http: HttpClient = inject(HttpClient);
  public makeHttpClientError(): void {
    this.http.get('fakeUrl' + Math.random()).subscribe();
  }
}
