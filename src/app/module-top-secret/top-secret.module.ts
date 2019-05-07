import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule }   from '../module-shared/shared.module';
import { TopSecretComponent } from './components/top-secret/top-secret.component';

import { TopSecretService }  from './services/top-secret/top-secret.service';

import { TopSecretRoutingModule } from './top-secret.routing-module';

@NgModule({
  declarations: [TopSecretComponent],
  providers: [ TopSecretService],
  imports: [
    CommonModule,  
    TopSecretRoutingModule,
    SharedModule
  ]
})
export class TopSecretModule { }
