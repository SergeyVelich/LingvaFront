import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupComponent } from './components/group/group.component';

import { Wrapper } from '../module-core/services/wrapper/wrapper.service';
import { AuthGuard } from '../module-account/services/auth/auth.guard';

const routes: Routes = [
  Wrapper.childRoutes([
    { path: 'group', component: GroupComponent, canActivate: [AuthGuard] }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupRoutingModule { }