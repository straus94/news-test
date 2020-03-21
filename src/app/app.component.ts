import { Component } from '@angular/core';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'news-test';
  login: string;
  isLogin: boolean;

  constructor(private authService: AuthService) {
    this.authService.sharedAuth.subscribe(auth => {
      console.log(auth);
      if (!auth) this.authService.setAuth('false');
      auth === 'true' ? this.isLogin = true : this.isLogin = false;
    });
    console.log(this.isLogin);
  }

  public logOut() {
    this.authService.setAuth('false');
  }
}
