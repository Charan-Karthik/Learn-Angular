// This file is known as an "Interface"
// kinda like a schema - defining the necessary parameters and their types
// "?" after a field indicates that it is optional

export interface Task {
    id?: number,
    text: string,
    day: string,
    reminder: boolean
}