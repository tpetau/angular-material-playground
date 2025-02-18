import { Component } from '@angular/core';

@Component({
  selector: 'app-dragdrop',
  imports: [],
  templateUrl: './dragdrop.component.html',
  styleUrl: './dragdrop.component.scss'
})
export class DragdropComponent {



  Drop($event: DragEvent) {
    console.log("Drop");
    $event.preventDefault();
    let files = $event.dataTransfer?.files;

    if (!files) {
      return;
    }

    for (let i = 0; i < files.length; i++) {
      console.log(files[i].name);
    }

    ($event.target as HTMLElement).classList.remove("is-dragover");
  }
  DragOver($event: DragEvent) {
    $event.preventDefault();
    ($event.target as HTMLElement).classList.add("is-dragover");
  }

  DragLeave($event: DragEvent) {
    $event.preventDefault();
    ($event.target as HTMLElement).classList.remove("is-dragover");
  }
}
