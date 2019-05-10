import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { GroupComponent } from './components/group/group.component';
import { GroupRoutingModule } from './group-routing.module';
import { ConfigService } from '../module-shared/services/config.service';
import { GroupService } from './services/group.service';
import { LanguageService } from './services/language.service';
import { GroupAddOrUpdateComponent } from './components/group-add-or-update/group-add-or-update.component';
import { GroupGridComponent } from './components/group-grid/group-grid.component';

import {  
  MatButtonModule, MatMenuModule, MatDatepickerModule,MatNativeDateModule , MatIconModule, MatCardModule, MatSidenavModule,MatFormFieldModule,  
  MatInputModule, MatTooltipModule, MatToolbarModule, MatSelectModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule  
} from '@angular/material';  
import { MatRadioModule } from '@angular/material/radio';   

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
    GroupComponent,
    GroupAddOrUpdateComponent, 
    GroupGridComponent 
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule,
    GroupRoutingModule,
    FormsModule,  
    ReactiveFormsModule,
    modules
  ],
  providers: [
    HttpClientModule,
    ConfigService,
    GroupService, 
    LanguageService,
    MatDatepickerModule 
  ]    
})
export class GroupModule { }
