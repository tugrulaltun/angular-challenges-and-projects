import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {ScrollingModule} from "@angular/cdk/scrolling";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ScrollingModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'optimize-big-list';

  items: string[] = [];

  constructor() {
    for (let i = 0; i < 100000; i++) {
      this.items.push("Name: " + i);
    }
  }
}
