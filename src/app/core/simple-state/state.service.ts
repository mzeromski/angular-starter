import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, Observable } from 'rxjs';
import { CacheService } from '../cache/cache.service';
import { stateData } from './state.data';
import { State } from './state.interface';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private readonly cacheKey: string = 'STATE';

  private _state: BehaviorSubject<State> = new BehaviorSubject(stateData);

  public state: Observable<State> = this._state.asObservable().pipe(distinctUntilChanged());

  public loadFromCache(): void {
    const state: State | null = CacheService.getCache(this.cacheKey);

    if (state) {
      this._state.next(state);
    }
  }

  public setState(state: State): void {
    this._state.next(state);
  }

  setOpenDialog(b: boolean): void {
    this._state.next({ ...this._state.getValue(), openDialog: b });
    CacheService.setCache(this.cacheKey, this._state.getValue(), 999);
  }
}
