import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'simple-counter',
    loadComponent: () => import('./simple-counter/simple-counter').then(m => m.SimpleCounter)
  },
  {
    path: 'linked-signal-container',
    loadComponent: () => import('./linked-signal/linked-signal-container').then(m => m.LinkedSignalContainer)
  }
];
