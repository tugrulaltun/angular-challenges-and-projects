import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RouterLink, RouterModule, RouterOutlet} from "@angular/router";
import {routes} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule, RouterOutlet, RouterLink],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
