import { Injectable } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { definePreset } from 'primeng/themes';
import { Aura } from 'primeng/themes/aura';
import { CacheService } from '../../../core/cache/cache.service';

export interface LayoutConfigCacheItem {
  color: string;
}

@Injectable({
  providedIn: 'root',
})
export class LayoutConfigService {
  private primengConfig: PrimeNGConfig = new PrimeNGConfig();

  private readonly cacheKey: string = 'layoutConfigTheme';

  public init(): void {
    const colorFromCache: LayoutConfigCacheItem = CacheService.getCache<LayoutConfigCacheItem>(
      this.cacheKey
    ) ?? { color: 'zinc' };

    this.initMainColor(colorFromCache.color);
  }

  public initMainColor(mainColor: string): void {
    const preset: typeof Aura = definePreset(Aura, {
      semantic: {
        primary: {
          50: '{' + mainColor + '.50}',
          100: '{' + mainColor + '.100}',
          200: '{' + mainColor + '.200}',
          300: '{' + mainColor + '.300}',
          400: '{' + mainColor + '.400}',
          500: '{' + mainColor + '.500}',
          600: '{' + mainColor + '.600}',
          700: '{' + mainColor + '.700}',
          800: '{' + mainColor + '.800}',
          900: '{' + mainColor + '.900}',
          950: '{' + mainColor + '.950}',
        },
      },
    });
    this.primengConfig.theme.set({
      preset: preset,
      options: {
        darkModeSelector: '.dark',

        cssLayer: {
          name: 'primeng',
          order: 'tailwind-base, primeng, tailwind-utilities',
        },
      },
    });
    CacheService.setCacheForever(this.cacheKey, { color: mainColor });
  }
}
