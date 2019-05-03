import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';    
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule, HttpClient } from '@angular/common/http';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  
  MatButtonModule, MatMenuModule, MatDatepickerModule,MatNativeDateModule , MatIconModule, MatCardModule, MatSidenavModule,MatFormFieldModule,  
  MatInputModule, MatTooltipModule, MatToolbarModule, MatSelectModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule  
} from '@angular/material';  
import { MatRadioModule } from '@angular/material/radio';   
  
import { AppRoutingModule } from './app-routing.module';  
import { AppComponent } from './app.component';

import { GroupService } from './services/group.service';
import { LanguageService } from './services/language.service';
import { AddOrUpdateGroupComponent } from './add-or-update-group/add-or-update-group.component';
import { GridGroupComponent } from './grid-group/grid-group.component';
import { HomeComponent } from './home/home.component';  

import { DecimalPipe } from '@angular/common';
import { DatePipe } from '@angular/common';

const appRoutes: Routes = [
  { path: '', component: HomeComponent }
 
];

const modules = [
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
  MatSelectModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule 
];

@NgModule({  
  declarations: [  
    AppComponent,  
    HomeComponent, AddOrUpdateGroupComponent, GridGroupComponent  
  ],  
  imports: [  
    BrowserModule,  
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,  
    BrowserAnimationsModule,   
    AppRoutingModule,
    RouterModule.forRoot(appRoutes), 
    modules,
  ],  
  providers: [HttpClientModule, MatDatepickerModule, GroupService, LanguageService],  
  bootstrap: [AppComponent]  
})  
export class AppModule { } 

// @NgModule({
//   imports: [  
//     modules 
//   ],
//   exports: [
//     modules,
//   ],
// })
// export class MaterialModule {};