import { Component, input, model } from '@angular/core';
import { UserpictureComponent } from './userpicture.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-userprofile',
  imports: [
    UserpictureComponent,
    MatButtonModule,
    MatIconModule],
  templateUrl: './userprofile.component.html',
  styleUrl: './userprofile.component.scss'
})
export class UserprofileComponent {

  editable: boolean = false;
  name = model("--");
  imgUrl = input<string>("");

  TextChanged(event: Event) {
    let inputElem = event.target as HTMLInputElement;
    this.name.update(value => value = inputElem.value);
  }

  EnterEditMode(): void {
    this.editable = true;
  }

  LeaveEditMode(): void {
    this.editable = false;
  }
}