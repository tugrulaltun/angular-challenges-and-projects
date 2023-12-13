import {CanMatchFn, Route, UrlSegment} from '@angular/router';
import {AuthService} from './auth.service';
import {inject} from "@angular/core";

export const roleMatchGuard: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  const authService = inject(AuthService);
  const expectedRoles = route.data as string[];
  const userRoles = authService.getUserRoles();

  return authService.hasRoles(expectedRoles, userRoles);
};
