import { NgModule, Optional, SkipSelf } from '@angular/core';

import { SharedModule } from '../module-shared/shared.module';

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
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    debugger;
    // Import guard
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
    }
  }
}
