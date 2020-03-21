import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SharingService} from '../services/sharing.service';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public theme = '';
  public name = 'User'

  constructor(private router: Router, private sharingService: SharingService, private authService: AuthService) {
    this.authService.sharedAuth.subscribe(auth => {
      if (auth === 'true') {
        this.name = 'Admin'
      }
    })
  }

  ngOnInit(): void {
  }

  moveToTheme() {
    console.log(this.theme);
    if (!this.theme.trim().length) {
      return;
    }

    this.sharingService.nextMessage(this.theme)
    // this.sharingService.sharedTheme.subscribe(theme => this.theme = theme)
    this.router.navigate(['/news']);
  }

}
