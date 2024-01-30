import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpMockService} from "../http-mock.service";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationModalComponent} from "../confirmation-modal/confirmation-modal.component";
import {ErrorModalComponent} from "../error-modal/error-modal.component";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-name-input-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './name-input-form.component.html',
  styleUrl: './name-input-form.component.css'
})
export class NameInputFormComponent {

  name: string = '';
  @Output() formSubmitted = new EventEmitter<string>();

  onSubmit() {
    this.formSubmitted.emit(this.name);
  }
}
