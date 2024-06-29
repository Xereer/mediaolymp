import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private _isMobile$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isMobile$: Observable<boolean> = this._isMobile$$.asObservable();

  public set isMobile(isMobile: boolean) {
    this._isMobile$$.next(isMobile);
  }
}
