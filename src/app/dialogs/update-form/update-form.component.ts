import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FirebaseService } from 'src/app/firebase.service';
import { DialogData } from 'src/app/pages/letter-manager/letter-manager.component';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {
  

  constructor(public dialogRef: MatDialogRef<UpdateFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, public firebaseService: FirebaseService) {
    
     }

    update(){
     //console.log();
  
      this.firebaseService.updateLetters(this.data.key, this.data.status, this.data.description);

      this.dialogRef.close();
    }

  ngOnInit(): void {
  }

}
