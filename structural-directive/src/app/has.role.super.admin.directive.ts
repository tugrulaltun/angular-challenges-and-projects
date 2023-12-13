import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthService} from "./auth.service";

@Directive({
  standalone: true,
  selector: '[hasRoleSuperAdmin]'
})
export class HasRoleSuperAdminDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService
  ) {
  }

  @Input() set hasRoleSuperAdmin(isSuperAdmin: boolean) {
    const userRoles = this.authService.getUserRoles();
    if (isSuperAdmin && userRoles.includes('SuperAdmin')) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
