import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FirebaseService } from 'src/app/firebase.service';
import { Letter } from 'src/app/models/letter';

@Component({
  selector: 'app-add-letter-info-form',
  templateUrl: './add-letter-info-form.component.html',
  styleUrls: ['./add-letter-info-form.component.css']
})
export class AddLetterInfoFormComponent implements OnInit {

  letter: Letter= new Letter();

  /*letterId = '';
  letterNo = '';
  title = '';
  rDate = '';
  aDate = '';
  aUnit = '';
  status = '';
  description = '';

  letterDet : any[] = [];*/
  //users : Observable<any> | undefined;

  letters : any[] = [];


  constructor(private firebaseService : FirebaseService, public db: AngularFirestore) { 
    //this.getLetters();
    //this.onUpdate();
  }

  onSubmit(){
    /*this.letterDet.push(this.letterId);
    this.letterDet.push(this.letterNo);
    this.letterDet.push(this.title);
    this.letterDet.push(this.rDate);
    this.letterDet.push(this.aDate);
    this.letterDet.push(this.aUnit);
    this.letterDet.push(this.status);
    this.letterDet.push(this.description);*/

    console.log(this.letter.letter_ID);
    this.firebaseService.createLetters(this.letter);

    /*this.letterId = '';
    this.letterNo = '';
    this.title = '';
    this.rDate = '';
    this.aDate = '';
    this.aUnit = '';
    this.status = '';
    this.description = '';*/
  }

  getLetters(){
    this.firebaseService.getLetters()
    .subscribe((res) => {
      this.letters = res;
      console.log(this.letters[0].payload.doc.data());
    })
    //console.log(this.users);
    
  }

 /*onUpdate(){
    //this.letters[1].letter_ID = this.letterId;
    //this.firebaseService.updateLetters(this.letters[1]);
    this.firebaseService.getUpdateData()
    .subscribe((res) => {
      this.letters  = res;
      console.log(res.doc.data());
    })
  }*/

 /* updateForm(key : string){
    //this.letter = letter;
    this.db.collection('newLetters').snapshotChanges().subscribe((res) => {
      this.letters = res;
      this.letter.letter_ID = this.letters[0].payload.doc(key).data().letter_ID;
      console.log(this.letter.letter_ID);
    })


  }*/

  ngOnInit(): void {
  }

}
