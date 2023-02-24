import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text!: string;
  @Input() color!: string;

  @Output() btnClick = new EventEmitter();
  // not too sure what the EventEmitter is doing - will need to come back to this
  // my idea is that it records the click as an event to send as an output for another component to take in as an input

  onClick() {
    // console.log('Add')
    this.btnClick.emit();
  }
}
