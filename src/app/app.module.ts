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

import { GroupService } from './module-group/services/group.service';
import { LanguageService } from './module-group/services/language.service';
import { AddOrUpdateGroupComponent } from './module-group/components/add-or-update-group/add-or-update-group.component';
import { GridGroupComponent } from './module-group/components/grid-group/grid-group.component';
import { HomeComponent } from './module-group/components/home/home.component';  

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