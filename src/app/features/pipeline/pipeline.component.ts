import { Component, OnInit } from '@angular/core';
import { TimeToMinutesPipe } from './timetominutes.pipe';
@Component({
  selector: 'app-pipeline',
  imports: [
    TimeToMinutesPipe],
  templateUrl: './pipeline.component.html',
  styleUrl: './pipeline.component.scss'
})
export class PipelineComponent {


  timeStr:string = "10:23";

  onChange($event: Event) {
    const inputElem = $event.target as HTMLInputElement;
    this.timeStr = inputElem.value;
    }
}
