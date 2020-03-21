import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public inputMovePassword = false;
  public inputMoveName = false;
  public name = '';
  public password = '';
  public incorrectPassword = false;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.name, this.password);
    if (this.name !== 'admin' || this.password !== '12345') {
      // localStorage.setItem('auth', 'false');
      this.authService.setAuth('false')
      this.incorrectPassword = true;
    } else {
      this.authService.setAuth('true')
      this.router.navigate(['/profile']);
    }
  }

  logout() {

  }
}
