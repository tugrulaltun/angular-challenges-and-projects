import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from "@angular/platform-browser";
import {WrapFnPipe} from "./wrap-fn.pipe";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    WrapFnPipe
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
