import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { TimeToMinutesPipe } from './timetominutes.pipe';
@Component({
  selector: 'app-pipeline',
  imports: [
    FormsModule,
    MatInputModule,
    TimeToMinutesPipe],
  templateUrl: './pipeline.component.html',
  styleUrl: './pipeline.component.scss'
})
export class PipelineComponent implements OnInit {

  timeStr!: string;

  ngOnInit(): void {
    this.timeStr = "10:23";
  }
}
