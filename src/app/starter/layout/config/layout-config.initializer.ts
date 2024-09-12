import { inject } from '@angular/core';
import { LayoutConfigService } from './layout-config.service';

export function initializeLayoutConfig(): () => void {
  const layoutConfig: LayoutConfigService = inject(LayoutConfigService);

  return () => {
    layoutConfig.init();
  };
}
