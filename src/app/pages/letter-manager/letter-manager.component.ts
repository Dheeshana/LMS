import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddLetterInfoFormComponent } from 'src/app/dialogs/add-letter-info-form/add-letter-info-form.component';
import { SearchInfoDialogComponent } from 'src/app/dialogs/search-info-dialog/search-info-dialog.component';
import { UpdateFormComponent } from 'src/app/dialogs/update-form/update-form.component';
import { FirebaseService } from 'src/app/firebase.service';
import { Letter } from 'src/app/models/letter';

export interface DialogData {
  letterID: string;
  status: string;
  description: string;
  key: string;
  letterNo: string;
  assignedDate: Date;
  assignedUnit: string;
  recievedDate: Date;
  letterTitle: string;
}

@Component({
  selector: 'app-letter-manager',
  templateUrl: './letter-manager.component.html',
  styleUrls: ['./letter-manager.component.css']
})
export class LetterManagerComponent implements OnInit {

  letters : any[] = [];
  key : string;
  upLetters : any[];
  upLetter : Letter;
  searchLet: any[];
  searched_det: Letter;
  searchID : string;

  constructor(public dialog : MatDialog, private firebaseService : FirebaseService) { 
    this.getLetters();
  }

  //opening dialog to enter details to the database
  openDialog(): void{
    const dialogRef = this.dialog.open(AddLetterInfoFormComponent, {
      width: '300px'
    })
  }

  //opening updating detail in a dialog
  openUpdateDialog(){
    const dialogRef = this.dialog.open(UpdateFormComponent, {
      width: '300px',
      data: {letterID: this.letterID, status: this.status, description: this.description, key: this.key}
    })
  }

  //opening searched item in an dialog
  openSearchDialog(){
    const dialogRef = this.dialog.open(SearchInfoDialogComponent, {
      width: '300px',
      data: {
        letterID: this.searched_det.letter_ID,
        status: this.searched_det.letter_status, 
        description: this.searched_det.letter_description, 
        key: this.searched_det.$key, 
        assignedDate: this.searched_det.letter_assignedDate,
        recievedDate: this.searched_det.letter_recievedDate,
        assignedUnit: this.searched_det.letter_assignedUnit,
        letterTitle: this.searched_det.letter_title,
        letterNo: this.searched_det.letter_No
      }
    })
  }

  //getting all the details from the database
  getLetters(){
    this.firebaseService.getLetters()
    .subscribe((res) => {
      this.letters = res;
      console.log(this.letters[0].payload.doc.data());
    })
    //console.log(this.users);
    
  }
  letterID : string;
  status : string;
  description: string;

  //exicutes whenkey the delete icon is clicked
  delete(key : string){
    this.firebaseService.deleteLetter(key);
  }

  //gets the details needed to update
  updateDetails(key: string){
    //exicuting the firebase method to get data from firebase
    this.firebaseService.getLetters()
    .subscribe((res) => {
      this.upLetters = res;
      this.upLetters.forEach((value) => {
        if(value.payload.doc.data().letter_key == key){
          this.letterID = value.payload.doc.data().letter_ID;
          this.status = value.payload.doc.data().letter_status;
          this.description = value.payload.doc.data().letter_description;
          this.upLetter = value.payload.doc.data();

          //this.upLetter = value.payload.doc.data();
          console.log(this.upLetter);
          
        } 
      })
      //this.openUpdateDialog();
    })
    
  }
  
  //searching item by letter id 
  searchInfo(){
    this.firebaseService.getLetters()
    .subscribe(res => {
      this.searchLet = res;
      this.searchLet.forEach(value => {
        if(value.payload.doc.data().letter_ID == this.searchID){
          this.searched_det = value.payload.doc.data();
          console.log(this.searched_det);

        }
      });
    })
    this.openSearchDialog();
  }

  //when update icon clicked this will start
  updateClicked(key : string){
    this.updateDetails(key);
    if(this.letterID != null || this.description != null || this.status != null){
      this.openUpdateDialog();
    }
    //return this.upLetter;
    this.key =  key;
  }
  
  updatedLet : Letter;

  ngOnInit(): void {
  }

}
