import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dragdrop',
  imports: [],
  templateUrl: './dragdrop.component.html',
  styleUrl: './dragdrop.component.scss'
})
export class DragdropComponent {

  @ViewChild("dragDropLog") dragDropLogElem!: ElementRef;

  Drop($event: DragEvent) {
    console.log("Drop");
    $event.preventDefault();
    let files = $event.dataTransfer?.files;

    if (!files) {
      return;
    }

    for (let i = 0; i < files.length; i++) {

      this.dragDropLogElem.nativeElement.value =
        this.dragDropLogElem.nativeElement.value + files[i].name + "\n";
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
