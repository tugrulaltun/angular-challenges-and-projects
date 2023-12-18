import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {InputFieldComponent} from "./input-field/input-field.component";
import {ListComponent} from "./list/list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, InputFieldComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'default-vs-onpush';

  data: string[] = [];

  onInputChange(newItem: string) {
    this.data.push(newItem);
    this.data = [...this.data];
  }
}
