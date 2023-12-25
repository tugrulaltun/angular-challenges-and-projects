import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterOutlet} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {BookService} from "./book.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'router-testing';

  searchQuery = '';
  book: any;

  constructor(private bookService: BookService, private router: Router) {
  }

  searchBooks() {
    this.bookService.search(this.searchQuery).subscribe({
      next: (books) => {
        if (books.length > 0) {
          this.book = books[0];
          this.router.navigate(['/book-details', this.book.id]);
        } else {
          this.book = null;
        }
      },
      error: (error) => {
        this.book = null;
        this.router.navigate(['/error']);
      },
      complete: () => {
      }
    });
  }
}
