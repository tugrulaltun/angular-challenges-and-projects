import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {FibonacciPipe} from "./fibonacci.pipe";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FibonacciPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'memoization';

  people = [
    {name: 'Alice', number: 3},
    {name: 'Bob', number: 5},
    {name: 'Charlie', number: 8},
    {name: 'Dana', number: 13},
    {name: 'Eve', number: 21},
    {name: 'Frank', number: 34}
  ];

  constructor() {
  }
}
