// include directives/components commonly used in features modules in this shared modules
// and import me into the feature module
// importing them individually results in: Type xxx is part of the declarations of 2 modules: ... Please consider moving to a higher module...
// https://github.com/angular/angular/issues/10646  

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AutofocusDirective } from './directives/auto-focus.directive';
import { CompareValidatorDirective } from './directives/compare-validator.directive';
import { PasswordValidatorDirective } from './directives/password-validator.directive';
import { InputButtonClearComponent } from './components/input-button-clear/input-button-clear.component';

import {
  MatButtonModule, MatMenuModule, MatDatepickerModule, MatNativeDateModule, MatIconModule, MatCardModule, MatSidenavModule, MatFormFieldModule,
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
    AutofocusDirective,
    CompareValidatorDirective,
    PasswordValidatorDirective,
    InputButtonClearComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    modules
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    AutofocusDirective,
    CompareValidatorDirective,
    PasswordValidatorDirective,
    modules,
    InputButtonClearComponent
  ],
  providers: [
  ]
})
export class SharedModule {
  constructor() {
    debugger;
  }
}