import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './module-core/core.module'
import { HomeModule } from './module-home/home.module';
import { AccountModule } from './module-account/account.module';
import { GroupModule } from './module-group/group.module';
import { TopSecretModule } from './module-top-secret/top-secret.module';
import { SharedModule } from './module-shared/shared.module';
import { TestModule } from './module-test/test.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    TestModule,
    HomeModule,
    AccountModule,
    GroupModule,
    TopSecretModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    debugger;
  }
} 