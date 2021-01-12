import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLetterInfoFormComponent } from './add-letter-info-form/add-letter-info-form.component';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule} from '@angular/material/icon';
import { UpdateFormComponent } from './update-form/update-form.component';
import { SearchInfoDialogComponent } from './search-info-dialog/search-info-dialog.component';



@NgModule({
  declarations: [
    AddLetterInfoFormComponent,
    LoginFormComponent,
    UpdateFormComponent,
    SearchInfoDialogComponent,
    
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  exports: [
    AddLetterInfoFormComponent,
    LoginFormComponent
  ]
})
export class DialogsModule { }
