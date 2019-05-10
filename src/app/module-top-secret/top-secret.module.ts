import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SharedModule }   from '../module-shared/shared.module';
import { TopSecretComponent } from './components/top-secret/top-secret.component';

import { ConfigService } from '../module-shared/services/config.service';
import { TopSecretService }  from './services/top-secret/top-secret.service';

import { TopSecretRoutingModule } from './top-secret.routing-module';

@NgModule({
  declarations: [TopSecretComponent],
  imports: [   
    HttpClientModule,  
    CommonModule,
    SharedModule,
    TopSecretRoutingModule,
  ],  
  providers: [
    HttpClientModule, 
    ConfigService,
    TopSecretService,
  ]
})
export class TopSecretModule { }
