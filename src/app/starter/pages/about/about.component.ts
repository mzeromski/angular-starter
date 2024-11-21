import { ChangeDetectionStrategy, Component, OnInit, signal, WritableSignal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CardModule, TranslateModule, DividerModule],
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit {
  public authors: WritableSignal<string[] | null> = signal(null);
  public mainAuthor: string = 'mz';
  public secondAuthor: string = 'ca';

  ngOnInit(): void {
    setTimeout(() => {
      this.authors.set(['ab', 'mz', 'ca']);
    }, 1000);
  }
}
