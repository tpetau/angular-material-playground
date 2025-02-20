import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog',
  imports: [],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {

  constructor(private dialogRef: DialogRef) {

    this.dialogRef.keydownEvents.subscribe(kdE => {
      if (kdE.key === "Escape") {
        this.dialogRef.close();
      }
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
