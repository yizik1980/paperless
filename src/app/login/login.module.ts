import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { FieldComponent } from './field/field.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MainComponent,FieldComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    MainComponent
  ]
})
export class LoginModule { }
