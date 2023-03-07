import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
// import { TASKS } from '../../example-tasks';
// Above line was commented out because we're going to import the tasks using a service (below line)
import { TaskService } from '../../services/task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] = [];

  // to use a service, it must be added as a provider in the constructor (add the constructor argument yourself - it is no longer automatically added)
  constructor(private taskService: TaskService) { }

  // also need to add the OnInit (see that it's imported above too) bc we need to get the tasks immediately upon load
  ngOnInit(): void {
    // not the ideal way to do it, typically want to be observables - especially when working with async data
    // this.tasks = this.taskService.getTasks();

    // ideal way to implement using observables
    // since the getTasks() method returns an observable, we're taking that observable (that we called tasks) and setting it to the local variable tasks (this.tasks)
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }
}
