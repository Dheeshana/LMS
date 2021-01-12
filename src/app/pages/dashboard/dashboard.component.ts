import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginFormComponent } from 'src/app/dialogs/login-form/login-form.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  panelOpenState = false;

  constructor(public dialog : MatDialog) { }


  openDialog(): void{
    const dialogRef = this.dialog.open(LoginFormComponent, {
      width: '300px'
    })
  }

  ngOnInit(): void {
  }

}
