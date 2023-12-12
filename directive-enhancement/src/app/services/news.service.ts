import {Injectable} from '@angular/core';
import {News} from '../models/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private newsItems: News[] = [
    {
      id: 1,
      date: new Date(),
      title: 'News Item 1',
      content: 'This is the first news item'
    },
    {
      id: 2,
      date: new Date(),
      title: 'News Item 2',
      content: 'This is the second news item'
    },
    {
      id: 3,
      date: new Date(),
      title: 'News Item 3',
      content: 'This is the third news item'
    }
  ];

  getNews(): News[] {
    return this.newsItems;
  }
}
