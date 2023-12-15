import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {PersonComponent} from "./person/person.component";
import {Person} from "./models/person.model";
import {ListComponent} from "./list/list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PersonComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'typed-context-outlet';
  person: Person = {name: 'Your Name', age: 30};

  students = [
    {name: 'Alice', age: 20},
    {name: 'Bob', age: 21},
    {name: 'Carol', age: 22},
    {name: 'Dave', age: 23},
    {name: 'Eve', age: 24},
    {name: 'Frank', age: 25},
    {name: 'Grace', age: 26},
    {name: 'Heidi', age: 27},
    {name: 'Ivan', age: 28},
    {name: 'Judy', age: 29},
    {name: 'Mallory', age: 30},
    {name: 'Oscar', age: 31},
    {name: 'Peggy', age: 32},
    {name: 'Trudy', age: 33},
    {name: 'Walter', age: 34},
    {name: 'Wendy', age: 35},
  ];
}
