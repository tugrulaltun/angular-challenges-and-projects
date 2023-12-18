import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';

interface Person {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngfor-optimization';

  items: Person[] = [];
  private nextId = 100;

  constructor() {
    this.initializeItems();
  }

  initializeItems() {
    for (let i = 0; i < 100; i++) {
      this.items.push({
        id: i,
        name: `Person ${i}`
      });
    }
  }

  addItem() {
    const newItem: Person = {
      id: this.nextId++,
      name: `Person ${this.nextId}`
    };
    this.items.push(newItem);
  }

  removeItem(itemToRemove: Person) {
    this.items = this.items.filter(item => item.id !== itemToRemove.id);
  }

  trackById(index: number, item: Person): number {
    return item.id;
  }
}
