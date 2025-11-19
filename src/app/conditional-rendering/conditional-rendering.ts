import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-conditional-rendering',
  imports: [],
  template: `
    @if (isAuthenticated()) {
      <h2>Welcome back, user!</h2>
      <button (click)="logout()">Logout</button>
    } @else {
      <h2>Please log in to continue.</h2>
      <button (click)="login()">Login</button>
    }
  `,
  styles: ``,
})
export class ConditionalRendering {
  isAuthenticated = signal(false);

  login() {
    this.isAuthenticated.set(true);
  }

  logout() {
    this.isAuthenticated.set(false);
  }
}
