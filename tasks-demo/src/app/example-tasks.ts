// This is like a mock DB, storing the data we want to display in the front-end

import { Task } from "./Task";

export const TASKS: Task[] = [ // the type is an array of task objects
// objects must follow the properties in the Task.ts Interface file
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'May 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'May 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'May 7th at 12:30pm',
        reminder: false,
    },
];