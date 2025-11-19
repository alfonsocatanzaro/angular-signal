import { Component, effect, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-debouncing',
  imports: [],
  template: `
    <input
      #searchInput
      type="text"
      [value]="query()"
      (input)="updateQuery(searchInput.value)"
      placeholder="Type something..."
    />
    @if(loading()) {
      <p>Loading...</p>
    }
  <ul>
    @for(item of results(); track item) {
      <li>{{ item }}</li>
    }
  </ul>


  `,
  styles: ``,
})
export class Debouncing {
  readonly data = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew'];
  query = signal('');
  loading = signal(false);
  results = signal<string[]>([]);
  debouncedQuery =
    toSignal(
      toObservable(this.query).pipe(debounceTime(500)),
      { initialValue: '' }
    );

  updateQuery(value: string) {
    this.query.set(value);
  }

  constructor() {
    effect(() => {
      const q = this.debouncedQuery();
      console.log('Searching for:', q);
      if (!q) {
        this.results.set([]);
        return;
      }

      this.loading.set(true);
      setTimeout(() => {
        this.results.set(this.data.filter(item => item.toLowerCase().includes(q.toLowerCase())));
        this.loading.set(false);
      }, 2000);

    });

  }
}
