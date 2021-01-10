import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLetterInfoFormComponent } from './add-letter-info-form/add-letter-info-form.component';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddLetterInfoFormComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    AddLetterInfoFormComponent,
    LoginFormComponent
  ]
})
export class DialogsModule { }
