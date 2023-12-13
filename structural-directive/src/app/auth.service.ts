import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly userRoles: string[] = [];

  constructor() {
    this.userRoles = ['Admin', 'SuperAdmin', 'Reader', 'Writer'];
  }

  getUserRoles(): string[] {
    return this.userRoles;
  }

  hasRoles(requiredRoles: string | string[], userRoles: string[]): boolean {
    if (!requiredRoles) return false;
    const rolesArray = Array.isArray(requiredRoles) ? requiredRoles : [requiredRoles];
    return rolesArray.some(role => userRoles.includes(role));
  }
}
