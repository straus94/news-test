import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppNewsService {

  constructor(private http: HttpClient) {

  }
  getNews(url): any {
    return this.http.get(url).pipe(delay(500));
  }
}
