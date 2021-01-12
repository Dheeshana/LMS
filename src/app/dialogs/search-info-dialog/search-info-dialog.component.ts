import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/pages/letter-manager/letter-manager.component';

@Component({
  selector: 'app-search-info-dialog',
  templateUrl: './search-info-dialog.component.html',
  styleUrls: ['./search-info-dialog.component.css']
})
export class SearchInfoDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SearchInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    ok(){
      this.dialogRef.close();
    }

  ngOnInit(): void {
  }

}
