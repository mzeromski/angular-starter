import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CardModule } from 'primeng/card';
import { CacheService } from '../../../core/cache/cache.service';

interface CacheDay {
  day: string;
}

@Component({
  selector: 'app-cache',
  standalone: true,
  imports: [CardModule, TranslateModule],
  templateUrl: './cache.component.html',
})
export class CacheComponent implements OnInit {
  ngOnInit(): void {
    const cacheKey: string = 'AngularStarter';
    const data: CacheDay = { day: 'Monday' };

    console.group('Cache info');
    const dataFromCache: CacheDay | null = CacheService.getCache<CacheDay>(cacheKey);
    console.log('Value from cache', dataFromCache);

    if (!dataFromCache) {
      console.log('Set cache for 5 seconds');
      CacheService.setCache(cacheKey, data, 5);
    } else {
      console.log('Value is in cache, no need to save');
    }
    console.groupEnd();
  }
}
