import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { ConfettiService } from '../core/confetti/confetti.service';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [ButtonModule, RouterModule, DividerModule],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.scss',
  providers: [ConfettiService],
})
export class HelloComponent implements OnInit, OnDestroy {
  private confettiService: ConfettiService = inject(ConfettiService);

  private looper?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    const intervalLimit: number = 10;
    let currentLoop: number = 1;

    this.confettiService.celebrate(2000);
    this.looper = setInterval(() => {
      if (currentLoop > intervalLimit) {
        clearInterval(this.looper);
      }
      currentLoop++;
      this.confettiService.celebrate(2000);
    }, 2100);
  }

  ngOnDestroy(): void {
    if (this.looper) {
      clearInterval(this.looper);
    }
  }
}
