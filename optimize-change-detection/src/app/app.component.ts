import {ChangeDetectorRef, Component, NgZone, OnDestroy, OnInit} from '@angular/core';
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
  title = 'optimize-change-detection';

  showButton = false;
  private readonly specificScrollPosition = 100;

  constructor(private ngZone: NgZone, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('scroll', this.onScroll.bind(this), true);
    });
  }

  onScroll(event: any) {
    const scrollPosition = event.target.scrollTop || window.scrollY;

    if (scrollPosition >= this.specificScrollPosition && !this.showButton) {
      this.showButton = true;
      this.triggerChangeDetection();
    } else if (scrollPosition < this.specificScrollPosition && this.showButton) {
      this.showButton = false;
      this.triggerChangeDetection();
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  private triggerChangeDetection() {
    this.ngZone.run(() => {
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.onScroll, true);
  }
}
