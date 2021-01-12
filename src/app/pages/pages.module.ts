import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetterManagerComponent } from './letter-manager/letter-manager.component';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule} from '@angular/forms';




@NgModule({
  declarations: [
  LetterManagerComponent,
  DashboardComponent
],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
    
  ],
  exports:[
    LetterManagerComponent,
    DashboardComponent
  ]
})
export class PagesModule { }
