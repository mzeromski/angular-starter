import { Injectable } from '@angular/core';
import confetti from 'canvas-confetti';

@Injectable()
export class ConfettiService {
  celebrate(duration: number = 3000): void {
    confetti({
      particleCount: 150,
      spread: 180,
      origin: { y: 0.6 },
      colors: ['#FF4500', '#008080', '#FFD700'],
    });

    setTimeout(() => confetti.reset(), duration);
  }
}
