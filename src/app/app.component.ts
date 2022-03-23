import { Component } from '@angular/core';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BritoNews';
  listedNews: any = [];
  loading: boolean = false;

  constructor (private NewsService: NewsService) {}

  searchNews(parameters: any) {
    this.loading = true;
    this.listedNews = [];
    // Receiving news data
    setTimeout(() => {
      this.NewsService.getNews(parameters).subscribe(data => {
        this.loading = false;
        this.listedNews = data.articles;
      }, error => {
        console.log(error);
        this.loading = false;
      })
    }, 1000)
  }
}
