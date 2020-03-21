import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AppNewsService} from '../services/app-news.service';
import {SharingService} from '../services/sharing.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnDestroy {

  @Input()
  theme: string;
  public news = [];
  themeDefault = 'Top (default)';
  default = 'http://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=25a1f3dd0ef5435f9b2470d47d3b5c41';
  apiKey = 'apiKey=25a1f3dd0ef5435f9b2470d47d3b5c41';
  domain = 'http://newsapi.org/v2/top-headlines?q=';
  public isEmpty = false;


  constructor(private newsService: AppNewsService, private sharingService: SharingService) {
    this.sharingService.sharedTheme.subscribe(theme => this.theme = theme);
    this.getNews();
  }

  ngOnInit(): void {

  }

  getNews() {
    let url;
    if (!this.theme.length) {
      url = this.default;
    } else {
      url = this.domain + this.theme + '&' + this.apiKey;
    }
    console.log(url);
    this.newsService.getNews(url)
      .subscribe(news => {
        if (news.totalResults === 0) {
          this.isEmpty = true;
        }
        this.news = news.articles;
      });
    console.log(this.news);
  }

  ngOnDestroy(): void {
    this.sharingService.nextMessage('');
  }

}
