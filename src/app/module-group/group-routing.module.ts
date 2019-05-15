import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupComponent } from './components/group/group.component';

import { Body } from '../module-core/services/body/body.service';
import { AuthGuard } from '../module-account/services/auth/auth.guard';

const routes: Routes = [
  Body.childRoutes([
    { path: 'group', component: GroupComponent, canActivate: [AuthGuard]}
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupRoutingModule { }