import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../Task';
import { TASKS } from '../example-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  // non-async method
  // getTasks(): Task[] {
  //   return TASKS;
  // }

  // async method
  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS); // the 'of' converts this into an observable
    return tasks;
  }
}
