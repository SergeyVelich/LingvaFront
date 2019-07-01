import { NgModule } from '@angular/core';

import { SharedModule } from '../module-shared/shared.module';

import { TopSecretRoutingModule } from './top-secret.routing-module';

import { TopSecretComponent } from './components/top-secret/top-secret.component';

@NgModule({
  declarations: [TopSecretComponent],
  imports: [
    SharedModule,
    TopSecretRoutingModule,
  ],
})
export class TopSecretModule { }
