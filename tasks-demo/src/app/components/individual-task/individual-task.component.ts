import { Component, Input } from '@angular/core';
import { Task } from '../../Task'

@Component({
  selector: 'app-individual-task',
  templateUrl: './individual-task.component.html',
  styleUrls: ['./individual-task.component.css']
})
export class IndividualTaskComponent {
  @Input() task!: Task;
}
