import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// no longer need 'of' (line above) as we're using HttpClient which returns an observable by default
import { Observable } from 'rxjs';
import { Task } from '../Task';
// import { TASKS } from '../example-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = "http://localhost:5000/tasks"

  constructor(private http: HttpClient) {}

  // non-async method
  // getTasks(): Task[] {
  //   return TASKS;
  // }

  // async method
  getTasks(): Observable<Task[]> {
    // const tasks = of(TASKS); // the 'of' converts this into an observable
    // return tasks;
    
    // Http method
    // http is the same as the http that we called in the constructor (i.e. private http)
    // by default the HttpClient returns an Observable
    return this.http.get<Task[]>(this.apiUrl);
  }
}
