import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Body } from '../module-shell/services/body/body.service';
import { TopSecretComponent } from './components/top-secret/top-secret.component';
import { AuthGuard } from '../module-account/services/auth/auth.guard';

const routes: Routes = [
Body.childRoutes([
    { path: 'topsecret', component: TopSecretComponent, canActivate: [AuthGuard] }       
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TopSecretRoutingModule { }