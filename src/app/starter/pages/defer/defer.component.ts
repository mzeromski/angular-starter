import { AfterContentChecked, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { DeferBigComponentComponent } from './defer-big-component/defer-big-component.component';

@Component({
  selector: 'app-defer',
  standalone: true,
  imports: [CardModule, DeferBigComponentComponent],
  templateUrl: './defer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeferComponent implements OnInit, AfterContentChecked {
  ngOnInit(): void {
    console.log('DeferComponent init');
  }

  ngAfterContentChecked(): void {
    console.log('DeferComponent ngAfterContentChecked run calculation to delay defer');

    let i: number = 0;
    const maxTime: number = Date.now() + 1000;
    console.log(Date.now());
    while (i < 1) {
      if (Date.now() > maxTime) {
        i = 2;
      }
      i = i * i;
    }
    console.log(Date.now());
  }
}
