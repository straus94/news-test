import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth = new BehaviorSubject(localStorage.getItem('auth'));
  sharedAuth = this.auth.asObservable();

  constructor() { }

  setAuth(auth: string) {
    // this.auth.next(auth);
    localStorage.setItem('auth', auth);
    this.auth.next(localStorage.getItem('auth'));
  }
}
