import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingService {

  private theme = new BehaviorSubject('')
  sharedTheme = this.theme.asObservable();

  constructor() { }

  nextMessage(theme: string) {
    this.theme.next(theme);
  }
}
