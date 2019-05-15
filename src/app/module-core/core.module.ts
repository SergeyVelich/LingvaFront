import { NgModule } from '@angular/core';

import { SharedModule }   from '../module-shared/shared.module';

import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    HeaderComponent, 
    BodyComponent,
    FooterComponent
  ]
})
export class CoreModule { 
  constructor() { 
    debugger;
  }
}
