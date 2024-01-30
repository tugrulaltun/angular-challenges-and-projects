import {Component, EventEmitter, Inject, Output} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-error-modal',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogContent,
    MatDialogClose,
    MatButton,
    MatDialogTitle
  ],
  templateUrl: './error-modal.component.html',
  styleUrl: './error-modal.component.css'
})
export class ErrorModalComponent {
  @Output() closed = new EventEmitter<void>();

  close() {
    this.closed.emit();
  }

}
