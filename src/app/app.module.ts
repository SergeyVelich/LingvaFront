import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';     
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  
import { AppRoutingModule } from './app-routing.module';  
import { AppComponent } from './app.component';

/* Module Imports */
import { ShellModule } from './module-shell/shell.module';
import { HomeModule }  from './module-home/home.module';
import { AccountModule }  from './module-account/account.module';
import { GroupModule }  from './module-group/group.module';
import { TopSecretModule } from './module-top-secret/top-secret.module';
import { SharedModule }   from './module-shared/shared.module';

@NgModule({  
  declarations: [  
    AppComponent
  ],  
  imports: [  
    BrowserModule,
    BrowserAnimationsModule,
    ShellModule,
    SharedModule,
    HomeModule,
    AccountModule, 
    GroupModule,
    TopSecretModule,    
    AppRoutingModule  
  ],  
  providers: [
  ],  
  bootstrap: [AppComponent]  
})  
export class AppModule { } 