import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {PagesModule} from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
