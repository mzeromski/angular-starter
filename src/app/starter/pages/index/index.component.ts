import { AsyncPipe, NgForOf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { StateService } from '../../../core/simple-state/state.service';
import { SlugifyPipe } from '../../../core/slugify/slugify.pipe';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    CardModule,
    TranslateModule,
    SlugifyPipe,
    NgForOf,
    DialogModule,
    ButtonModule,
    AsyncPipe,
  ],
  templateUrl: './index.component.html',
})
export class IndexComponent {
  public dialogVisible: boolean = false;
  public stateService: StateService = inject(StateService);

  openDialog(): void {
    this.stateService.setOpenDialog(true);
  }
  closeDialog(): void {
    this.stateService.setOpenDialog(false);
  }
}
