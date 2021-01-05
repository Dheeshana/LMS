import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLetterInfoFormComponent } from './add-letter-info-form/add-letter-info-form.component';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    AddLetterInfoFormComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [
    AddLetterInfoFormComponent
  ]
})
export class DialogsModule { }
