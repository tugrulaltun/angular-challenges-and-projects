import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-input-component',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './input-component.component.html',
  styleUrl: './input-component.component.css'
})
export class InputComponentComponent {
  title: string = '';
  @Output() titleChange = new EventEmitter<string>();

  onInputChange(): void {
    this.titleChange.emit(this.title);
  }
}
