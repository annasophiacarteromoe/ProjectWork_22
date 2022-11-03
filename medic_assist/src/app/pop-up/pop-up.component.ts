import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<PopUpComponent>, private jumper: Router) { }

  ngOnInit(): void {
  }

  CloseAndNavigate() {
    this.dialogRef.close();
    this.jumper.navigate(['/']);
  }
}
