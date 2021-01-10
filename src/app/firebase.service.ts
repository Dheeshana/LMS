import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Letter } from './models/letter';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  letters : any;

  constructor(public db: AngularFirestore, private firestore: AngularFireDatabase) { 
    this.letters = this.firestore.list('newLetters');
    this.getUpdateData();
  }

  
  createUser(value: any[]){
    //console.log(value[0]);
    this.db.collection('users').doc().set({
      firstname: value[0],
      lastname: value[1],
      age : value[2],
      email : value[3],
      password : value[4]
    }).then(res => {
      console.log('User submitted successfully!');
    }).catch(err => {
      console.log(err);
    })
 }

 //adding letters to the firebase
 createLetters(letter: Letter = new Letter()){
     letter.$key = this.firestore.createPushId();
     console.log(letter.$key);
   this.db.collection('newLetters').doc(letter.$key).set({
     letter_key : letter.$key,
     letter_ID: letter.letter_ID,
     letter_No: letter.letter_No,
     letter_title: letter.letter_title,
     letter_recievedDate: letter.letter_recievedDate,
     letter_assignedDate: letter.letter_assignedDate,
     letter_assignedUnit: letter.letter_assignedUnit,
     letter_status: letter.letter_status,
     letter_description: letter.letter_description
   }).then(res => {
     console.log('Letter successfully added!');
   }).catch(err => {
     console.log(err);
   })

 }

 users: Observable<any> | undefined;
 letter: Letter = new Letter();
 
 //retreving letters from firebase
 getLetters(){
  //var docRef = this.db.collection("newLetters").ref.doc().id;
  this.users =  this.db.collection('newLetters').snapshotChanges();
  //this.letter.$key = 
  //console.log(docRef);
  
  return this.users;
 }

 //getting the data of the dataset we want to update
 getUpdateData(){
    var user = this.db.collection('newLetter').doc('-MQWeYXZqz9cYFC3PX2_').get();
   //console.log(this.users);
   return this.users;
 }


 //updating a letter
 updateLetters(key : string, value: any[]){
  // let letter_No = value[1]; 
  // this.letters.update(letter_No, value);
 }

 //deleting a letter from the database
 deleteLetter(key: string){
   this.db.collection('newLetters').doc(key).delete()
   .then(res => {
     console.log("Successfully Deleted!")
   }).catch(err => {
     console.log(err);
   })
 }
 
}
