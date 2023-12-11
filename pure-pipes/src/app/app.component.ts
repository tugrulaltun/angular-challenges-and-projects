import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pure-pipes';
  currentDate = new Date().toISOString();
  amount = 100;
  conversionRate = 0.92;
  distance = 10;
  articles = [
    {
      title: 'News Title 1',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'News Title 1',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'News Title 1',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
  ];
  products = [
    {
      name: 'Product 1',
      discount: 0.25
    },
    {
      name: 'Product 2',
      discount: 0.10
    },
    {
      name: 'Product 3',
      discount: 0.50
    },
  ];
  items = ['Apple', 'Pear', 'Banana', 'Orange', 'Strawberry'];
  searchText = '';
  user = {
    name: 'John Doe',
    age: 30,
    city: 'İstanbul'
  };
  productList = [
    {name: 'Product A', price: 150},
    {name: 'Product B', price: 100},
    {name: 'Product C', price: 200},
  ];
  sortField = '';

  sortBy(field: string) {
    this.sortField = field;
  }

}
