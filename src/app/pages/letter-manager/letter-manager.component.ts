import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddLetterInfoFormComponent } from 'src/app/dialogs/add-letter-info-form/add-letter-info-form.component';
import { FirebaseService } from 'src/app/firebase.service';
import { Letter } from 'src/app/models/letter';

@Component({
  selector: 'app-letter-manager',
  templateUrl: './letter-manager.component.html',
  styleUrls: ['./letter-manager.component.css']
})
export class LetterManagerComponent implements OnInit {

  letters : any[] = [];

  constructor(public dialog : MatDialog, private firebaseService : FirebaseService) { 
    this.getLetters();
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(AddLetterInfoFormComponent, {
      width: '300px'
    })
  }

  getLetters(){
    this.firebaseService.getLetters()
    .subscribe((res) => {
      this.letters = res;
      console.log(this.letters[0].payload.doc.data());
    })
    //console.log(this.users);
    
  }

  delete(key : string){
    this.firebaseService.deleteLetter(key);
  }

  /*update(key: string){
    //this.addLetter.updateForm(key);

  }*/

  ngOnInit(): void {
  }

}
