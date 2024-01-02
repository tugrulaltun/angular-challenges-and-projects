import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input() initialValue: number = 0;
  @Output() result = new EventEmitter<number>();

  count: number = this.initialValue;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  sendCount() {
    this.result.emit(this.count);
  }
}
