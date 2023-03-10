import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-individual-task',
  templateUrl: './individual-task.component.html',
  styleUrls: ['./individual-task.component.css']
})
export class IndividualTaskComponent {
  @Input() task!: Task;
  // @Output() onDeleteTask(): EventEmitter<Task> {
  //   return new EventEmitter();
  // } 
  @Output() onDeleteTask(): EventEmitter<Task> {
    return new EventEmitter()
  }

  // @Output() onDeleteTask(): EventEmitter<Task> = new EventEmitter();
    


  faTimes = faTimes;

  onDelete(task: Task) {
    console.log('trying to delete', task);
    this.onDeleteTask.emit(task);
  }
}
