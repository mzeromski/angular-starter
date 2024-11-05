import { inject } from '@angular/core';
import { StateService } from './state.service';

export function initializeState(): () => void {
  const stateService: StateService = inject(StateService);
  return () => {
    stateService.loadFromCache();
  };
}
