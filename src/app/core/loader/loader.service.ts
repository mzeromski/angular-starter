import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private _status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public status: Observable<boolean> = this._status.asObservable();

  show(): void {
    this._status.next(true);
  }
  hide(): void {
    this._status.next(false);
  }
}
