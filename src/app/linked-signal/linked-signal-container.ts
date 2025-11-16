import { Component, signal } from '@angular/core';
import { LinkedSignalComponent } from '../linked-signal-component/linked-signal-component';

@Component({
  selector: 'app-linked-signal-container',
  imports: [LinkedSignalComponent],
  template: `
    <p>linked-signal works!</p>
    <app-linked-signal-component [userId]="userId()" ></app-linked-signal-component>
    <button (click)="changeUserId()">Next User</button>
  `,
  styles:  ``,
})
export class LinkedSignalContainer {

  userId = signal(1);
  changeUserId() {
    this.userId.set(this.userId() + 1);
  }
}
