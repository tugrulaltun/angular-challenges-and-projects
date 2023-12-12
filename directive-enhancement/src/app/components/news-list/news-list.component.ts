import {Component, OnInit} from '@angular/core';
import {News} from "../../models/news.model";
import {NewsService} from "../../services/news.service";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css'],
})
export class NewsListComponent implements OnInit {
  newsItems: News[] = [];

  constructor(private newsService: NewsService) {
  }

  ngOnInit(): void {
    this.newsItems = this.newsService.getNews();
  }
}
