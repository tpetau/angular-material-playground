import { Component, effect, signal } from '@angular/core';
import { UserprofileComponent } from "./demos/userprofile/userprofile.component";
import { DragdropComponent } from "./demos/dragdrop/dragdrop.component";

@Component({
  selector: 'app-components',
  imports: [UserprofileComponent, DragdropComponent],
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss'
})
export class ComponentsComponent {


  userName = signal("Hugo");
  imgUrl = signal("favicon.ico");
  
    constructor() {

    }


}
