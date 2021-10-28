import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { FieldComponent } from './field/field.component';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'ng-uikit-pro-standard';
import { SuccessLoginComponent } from './success-login/success-login.component';



@NgModule({
  declarations: [MainComponent,FieldComponent, SuccessLoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ToastModule.forRoot()
  ],
  exports:[
    MainComponent
  ]
})
export class LoginModule { }
