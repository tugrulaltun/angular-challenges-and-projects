import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AsyncPipe, CommonModule, NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";
import {TodoListComponent} from "./todo-list/todo-list.component";
import {SomePipe} from "./some.pipe";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatLineModule} from "@angular/material/core";

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    SomePipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AsyncPipe,
    FormsModule,
    NgForOf,
    MatInputModule,
    MatListModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatLineModule,
    NgStyle,
    NgClass,
    NgIf
  ],
  providers: [],
  exports: [
    SomePipe
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
