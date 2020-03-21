import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router) {
    this.checkAuth();
  }

  ngOnInit(): void {
  }

  checkAuth(){
    const isAuth = localStorage.getItem('auth');
    console.log(isAuth);
    if (isAuth === 'false') {
      this.router.navigate(['/login']);
    }
  }
}
