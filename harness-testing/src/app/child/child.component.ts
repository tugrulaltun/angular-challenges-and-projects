import {Component} from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [
    MatInputModule,
    FormsModule,
    MatButtonModule,
    NgIf
  ],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  name: string = '';
  message: string = '';

  sayHello() {
    this.message = `Hello, ${this.name}!`;
  }
}
