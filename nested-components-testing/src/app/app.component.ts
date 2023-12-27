import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {ErrorComponentComponent} from "./error-component/error-component.component";
import {ResultComponentComponent} from "./result-component/result-component.component";
import {ButtonComponentComponent} from "./button-component/button-component.component";
import {InputComponentComponent} from "./input-component/input-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ErrorComponentComponent,
    ResultComponentComponent,
    ButtonComponentComponent,
    InputComponentComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = '';
  isValid: boolean = true;

  setTitle(newTitle: string): void {
    this.title = newTitle;
  }

  validateTitle(): void {
    this.isValid = this.title.length > 0;
  }
}
