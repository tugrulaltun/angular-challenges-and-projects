import {Component} from '@angular/core';
import {DataService} from "../data.service";
import {catchError, of} from "rxjs";
import {FormsModule} from "@angular/forms";
import {JsonPipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-fetch-data',
  standalone: true,
  imports: [
    FormsModule,
    JsonPipe,
    NgIf,
    NgForOf
  ],
  templateUrl: './fetch-data.component.html',
  styleUrl: './fetch-data.component.css'
})
export class FetchDataComponent {
  dataType = '';
  data: any[] = [];
  error = '';

  constructor(private dataService: DataService) {
  }

  fetchData(): void {
    this.dataService.fetchData(this.dataType).pipe(
      catchError(error => {
        this.error = error.message;
        return of([]);
      })
    ).subscribe({
      next: (response) => {
        this.data = response;
        this.error = '';
      },
      error: (error) => console.log(error),
    });
  }
}
