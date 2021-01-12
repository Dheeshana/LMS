import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseService } from 'src/app/firebase.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  fname : string;
  lname : string;
  age : string;
  email : string;
  pwd : string;
  cpwd : string;

  hide =true;
  chide = true;

  user: any[] = [];

  constructor(public firebaseService : FirebaseService) {

   }

  onSubmit(): void{
    this.user.push(this.fname);
    this.user.push(this.lname);
    this.user.push(this.age);
    this.user.push(this.email);
    this.user.push(this.pwd);

    console.log(this.user[0] + this.user[1]);

    this.firebaseService.createUser(this.user);
    this.fname = '';
    this.lname = '';
    this.age = '';
    this.email = '';
    this.pwd = '';
    this.cpwd = '';



  }

  ngOnInit(): void {
  }

}
