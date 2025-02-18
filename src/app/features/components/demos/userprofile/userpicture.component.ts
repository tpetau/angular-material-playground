import { Component, ElementRef, input, model, ViewChild } from '@angular/core';
import { read } from 'fs';

@Component({
  selector: 'app-userpicture',
  imports: [],
  templateUrl: './userpicture.component.html',
  styleUrl: './userpicture.component.scss'
})
export class UserpictureComponent {


  imgUrl = model("");

  @ViewChild("profilePicture") profilePictureRef!: ElementRef;

  ChangeProfileImg(fileList: FileList | null): void {

    if (!fileList) {
      return;
    }

    var file: File = fileList[0];
    var reader = new FileReader();
    reader.onload = (e) => {
      console.log(reader.result);

      if (reader.result)
        this.imgUrl.set(reader.result?.toString());
    }
    reader.readAsDataURL(file);
  }
}
