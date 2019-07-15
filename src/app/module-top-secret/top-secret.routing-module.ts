import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Wrapper } from '../module-core/services/wrapper/wrapper.service';
import { TopSecretComponent } from './components/top-secret/top-secret.component';
import { AuthGuard } from '../module-account/services/auth/auth.guard';

const routes: Routes = [
  Wrapper.childRoutes([
    { path: 'topsecret', component: TopSecretComponent, canActivate: [AuthGuard] }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopSecretRoutingModule { }