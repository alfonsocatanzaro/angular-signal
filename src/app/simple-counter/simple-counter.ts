import { Component } from '@angular/core';
import { signal,computed,effect } from '@angular/core';


@Component({
  selector: 'app-simple-counter',
  imports: [],
  template: `
    <div>
      <h2>Simple Counter Example</h2>
        <p>Count: {{ counter() }}</p>
        <p>Double Count: {{ doubleCounter() }}</p>
        <button (click)="increment()">Increment</button>
        <button (click)="decrement()">Decrement</button>
    </div>
  `,
  styles: ``,
})
export class SimpleCounter {
  counter = signal(0);
  doubleCounter = computed(() => this.counter() * 2);

  constructor() {
    effect(() => {
      console.log(`Double counter value: ${this.doubleCounter()}`);
    });
  }
  increment() {
    this.counter.set(this.counter() + 1);
  }

  decrement() {
    this.counter.set(this.counter() - 1);
  }

}
