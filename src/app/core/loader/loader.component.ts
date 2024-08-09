import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
})
export class LoaderComponent {
  public loaderService: LoaderService = inject(LoaderService);
}
