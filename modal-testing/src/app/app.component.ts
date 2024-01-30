import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ErrorModalComponent} from "./error-modal/error-modal.component";
import {ConfirmationModalComponent} from "./confirmation-modal/confirmation-modal.component";
import {NameInputFormComponent} from "./name-input-form/name-input-form.component";
import {NgIf} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ErrorModalComponent, ConfirmationModalComponent, NameInputFormComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'modal-testing';

  constructor(public dialog: MatDialog) {
  }

  handleFormSubmission(name: string) {
    if (name) {
      this.openConfirmationDialog();
    } else {
      this.openErrorDialog();
    }
  }

  openConfirmationDialog() {
    const dialogRef = this.dialog.open(ConfirmationModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

      } else {

      }
    });
  }

  openErrorDialog() {
    this.dialog.open(ErrorModalComponent);
  }
}
