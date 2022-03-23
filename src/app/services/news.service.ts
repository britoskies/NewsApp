import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { iNews } from '../interfaces/news';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient){ }

  getNews(parameters: { country: string; category: string; }): Observable<iNews> {
    // Fetching news data
    const urlBase: string = environment.api;
    const urlQuery: string = `country=${parameters.country}&category=${parameters.category}&apiKey=3a81f0a8c5414805a4fd32abc5acbe46`
    return this.http.get<iNews>(urlBase + urlQuery);
  }
}
