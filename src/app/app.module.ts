import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';  
import { GroupService } from './group.service';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule, HttpClient } from '@angular/common/http';  
import {  
  MatButtonModule, MatMenuModule, MatDatepickerModule,MatNativeDateModule , MatIconModule, MatCardModule, MatSidenavModule,MatFormFieldModule,  
  MatInputModule, MatTooltipModule, MatToolbarModule  
} from '@angular/material';  
import { MatRadioModule } from '@angular/material/radio';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
  
import { AppRoutingModule } from './app-routing.module';  
import { AppComponent } from './app.component';  
import { GroupComponent } from './group/group.component';  
  
@NgModule({  
  declarations: [  
    AppComponent,  
    GroupComponent  
  ],  
  imports: [  
    BrowserModule,  
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,  
    BrowserAnimationsModule,  
    MatButtonModule,  
    MatMenuModule,  
    MatDatepickerModule,  
    MatNativeDateModule,  
    MatIconModule,  
    MatRadioModule,  
    MatCardModule,  
    MatSidenavModule,  
    MatFormFieldModule,  
    MatInputModule,  
    MatTooltipModule,  
    MatToolbarModule,  
    AppRoutingModule  
  ],  
  providers: [HttpClientModule, GroupService,MatDatepickerModule],  
  bootstrap: [AppComponent]  
})  
export class AppModule { }  