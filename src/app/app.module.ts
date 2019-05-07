import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';     
import { HttpClientModule } from '@angular/common/http';  
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

// used to create fake backend
import { FakeBackendProvider } from './module-shared/mocks/fake-backend-interceptor';
import { ConfigService } from './module-shared/services/config.service';

@NgModule({  
  declarations: [  
    AppComponent
  ],  
  imports: [  
    BrowserModule,    
    HttpClientModule,  
    BrowserAnimationsModule,
    ShellModule,
    HomeModule,
    AccountModule,
    SharedModule,
    GroupModule,
    TopSecretModule,    
    AppRoutingModule  
  ],  
  providers: [
    HttpClientModule, 
    ConfigService,
    FakeBackendProvider],  
  bootstrap: [AppComponent]  
})  
export class AppModule { } 