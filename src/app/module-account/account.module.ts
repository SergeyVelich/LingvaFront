import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthCallbackComponent } from './components/auth-callback/auth-callback.component';
import { SharedModule }   from '../module-shared/shared.module';

import { AccountRoutingModule } from './account.routing-module';
import { AuthGuard } from './services/auth/auth.guard';
import { AuthService }  from './services/auth/auth.service';

import { CompareValidatorDirective } from '../module-shared/directives/compare-validator.directive';

@NgModule({
  declarations: [
    LoginComponent, 
    RegisterComponent,
    AuthCallbackComponent,
    CompareValidatorDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AccountRoutingModule,
    SharedModule  
  ],
  providers: [
    AuthService,
    AuthGuard    
  ]
})
export class AccountModule { 
  constructor(@Optional() @SkipSelf() parentModule: AccountModule) {
    // Import guard
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
    }
  }
}