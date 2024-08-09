import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-licences',
  standalone: true,
  imports: [],
  templateUrl: './licences.component.html',
})
export class LicencesComponent implements OnInit {
  private http: HttpClient = inject(HttpClient);

  public license?: string;

  ngOnInit(): void {
    this.http
      .get<string>('/3rdpartylicenses.txt')

      .subscribe(result => {
        this.license = result;
      });
  }
}
