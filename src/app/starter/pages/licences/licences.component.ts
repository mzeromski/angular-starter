import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-licences',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './licences.component.html',
})
export class LicencesComponent implements OnInit {
  private http: HttpClient = inject(HttpClient);
  public licence?: string;
  ngOnInit(): void {
    this.http.get('/3rdpartylicenses.txt', { responseType: 'text' }).subscribe(data => {
      this.licence = data;
    });
  }
}
