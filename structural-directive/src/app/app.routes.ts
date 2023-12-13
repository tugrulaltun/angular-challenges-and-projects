import {Routes} from '@angular/router';
import {roleMatchGuard} from "./can.match.guard";
import {TeamComponent} from "./team/team.component";

export const routes: Routes = [
  {
    path: 'team/:id',
    component: TeamComponent,
    loadComponent: () => import('./team/team.component').then(mod => mod.TeamComponent),
    canMatch: [roleMatchGuard],
    data: {roles: ['Admin', 'Manager']}
  },
];
