import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxNumberInputComponent } from './ngx-number-input.component';



@NgModule({
  declarations: [
    NgxNumberInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NgxNumberInputComponent
  ]
})
export class NgxNumberInputModule { }
