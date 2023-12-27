import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-error-component',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './error-component.component.html',
  styleUrl: './error-component.component.css'
})
export class ErrorComponentComponent {
  @Input() errorMessage: string = '';
}
