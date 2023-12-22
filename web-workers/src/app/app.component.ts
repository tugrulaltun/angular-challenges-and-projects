import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'web-workers';
  loading: boolean = false;
  progress: number = 0;
  private worker!: Worker;

  ngOnInit() {
    this.loading = true;
    this.progress = 0;

    if (typeof Worker !== 'undefined') {
      this.worker = new Worker(new URL('./my-worker.worker', import.meta.url));

      this.worker.onmessage = ({ data }) => {
        if (data.type === 'progress') {
          this.progress = data.value;
        } else if (data.type === 'result') {
          console.log('Fibonacci Sequence Result: ', data.value);
          this.loading = false;
          this.worker.terminate();
        }
      };

      const fibonacciSequenceLength = 5000000;
      this.worker.postMessage(fibonacciSequenceLength);
    } else {
      this.loading = false;
    }
  }

  ngOnDestroy() {
    if (this.worker) {
      this.worker.terminate();
    }
  }
}
