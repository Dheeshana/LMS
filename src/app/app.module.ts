import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { PagesModule } from './pages/pages.module';
import {  MatInputModule } from '@angular/material/input';
import { DialogsModule } from './dialogs/dialogs.module';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { AngularFirestoreModule} from '@angular/fire/firestore';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireModule} from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatButtonModule,
    MatToolbarModule,
    PagesModule,
    MatInputModule,
    DialogsModule,
    MatIconModule,
    MatDialogModule,
    MatTableModule,
    MatDatepickerModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule,

    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
