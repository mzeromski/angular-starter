import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faPalette, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { PopoverModule } from 'primeng/popover';
import { LayoutConfigService } from '../../config/layout-config.service';
import { themeSelectorConfig } from './theme-selector.config';

@Component({
  selector: 'app-theme-selector',
  standalone: true,
  imports: [FaIconComponent, PopoverModule, CommonModule],
  templateUrl: './theme-selector.component.html',
})
export class ThemeSelectorComponent {
  protected readonly faPalette: IconDefinition = faPalette;
  public readonly config: string[] = themeSelectorConfig;

  private layoutConfig: LayoutConfigService = inject(LayoutConfigService);

  setMainColor(mainColor: string): void {
    this.layoutConfig.initMainColor(mainColor);
  }
}
