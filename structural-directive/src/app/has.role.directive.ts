import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthService} from "./auth.service";

@Directive({
  standalone: true,
  selector: '[hasRole]'
})
export class HasRoleDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService
  ) {
  }

  @Input() set hasRole(roles: string | string[]) {
    const userRoles = this.authService.getUserRoles();
    if (this.authService.hasRoles(roles, userRoles)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
