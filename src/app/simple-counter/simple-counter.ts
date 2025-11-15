import { Component } from '@angular/core';
import { signal,computed,effect } from '@angular/core';


@Component({
  selector: 'app-simple-counter',
  imports: [],
  templateUrl: './simple-counter.html',
  styleUrl: './simple-counter.scss',
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
