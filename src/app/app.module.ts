import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import {AppNewsService} from './services/app-news.service';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    NewsComponent,
    AppComponent,
    HomeComponent,
    ProfileComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AppNewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
