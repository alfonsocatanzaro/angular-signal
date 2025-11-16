import { Component, input, linkedSignal } from '@angular/core';

@Component({
  selector: 'app-linked-signal-component',
  imports: [],
  template: `
    <h3>User ID: {{ userId() }} </h3>
    <p> Formatted name: {{ formatted() }} </p>
    <p class="clickable" (click)="greet()">Greet!</p>
  `,
  styles: `.clickable{ cursor: pointer; color: blue; text-decoration: underline; }`
})
export class LinkedSignalComponent {
  userId = input<number>(0);

  // linkedSignal è writable... computed no!
  formatted = linkedSignal(() => {
    const id = this.userId();
    return `User-${id.toString().padStart(3, '0')}`;
  });

  greet() {
    const name = this.formatted();
    this.formatted.set(`Ciao ${name}, nice to meet you!`);
  }

}
