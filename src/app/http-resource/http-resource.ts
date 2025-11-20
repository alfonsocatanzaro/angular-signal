import { httpResource } from '@angular/common/http';
import { Component, computed, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-http-resource',
  imports: [],
  template: `
  <input
      #searchInput
      type="text"
      [value]="query()"
      (input)="updateQuery(searchInput.value)"
      placeholder="Department..."
  />
  @if(loading()) {
    <p>Loading....</p>
  }
  @if(error()) {
    <p>Error: {{ error() }}</p>
  }
  <ul>
    @for(item of results(); track item) {
      <li>({{ item.id }}) {{ item.name }} - {{ item.department }}</li>
    }
  </ul>
  `,
  styles: ``,
})
export class HttpResource {
  query = signal('');
  debouncedQuery =
    toSignal(
      toObservable(this.query).pipe(debounceTime(500)),
      { initialValue: '' }
    );
  updateQuery(value: string) {
    this.query.set(value);
  }
  #usersResource = httpResource<User[]>(() => {
    if (!this.debouncedQuery()) {
      return undefined;
    }
    const department = encodeURIComponent(this.debouncedQuery());
    const url = `http://localhost:3000/users?department=${department}`;
    return url;
  });


  loading = computed(() => this.#usersResource.isLoading());
  error = computed(() => this.#usersResource.error());
  results = computed(() => this.#usersResource.value());

}

type User = {
  id: number;
  name: string;
  department: string;
};
