import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLetterInfoFormComponent } from './add-letter-info-form/add-letter-info-form.component';
import { MatInput } from '@angular/material/input';



@NgModule({
  declarations: [
    AddLetterInfoFormComponent
  ],
  imports: [
    CommonModule,
    MatInput
  ],
  exports:[
    AddLetterInfoFormComponent
  ]
})
export class PagesModule { }
