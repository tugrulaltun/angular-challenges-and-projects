import {Component, OnDestroy, OnInit, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {webSocket} from "rxjs/webSocket";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnDestroy, OnInit {
  title = 'rxjs-signal-interoperability';

  message$ = webSocket('ws://example.com/chat');
  userStatus = signal("offline");

  constructor() {
    this.message$.subscribe({
      next: message => console.log('New message:', message),
      error: err => console.error('WebSocket error:', err),
      complete: () => this.userStatus.set('offline')
    });

    console.log(this.userStatus());
  }

  ngOnInit(): void {
    this.userStatus.update(() => 'online');
  }

  ngOnDestroy() {
    this.userStatus.update(() => 'offline');
  }
}
