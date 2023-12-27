import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-result-component',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './result-component.component.html',
  styleUrl: './result-component.component.css'
})
export class ResultComponentComponent {
  @Input() title: string = '';
}
