import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule, RouterOutlet} from "@angular/router";
import {HasRoleDirective} from "./has.role.directive";
import {HasRoleSuperAdminDirective} from "./has.role.super.admin.directive";
import {routes} from "./app.routes";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    RouterOutlet,
    HasRoleDirective,
    HasRoleSuperAdminDirective
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
