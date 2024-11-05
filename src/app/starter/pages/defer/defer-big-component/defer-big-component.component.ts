import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-defer-big-component',
  standalone: true,
  imports: [],
  templateUrl: './defer-big-component.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeferBigComponentComponent implements OnInit {
  ngOnInit(): void {
    console.log('DeferBigComponentComponent init');
  }
}
