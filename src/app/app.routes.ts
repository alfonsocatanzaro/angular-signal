import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'simple-counter',
    loadComponent: () => import('./simple-counter/simple-counter').then(m => m.SimpleCounter)
  },
  {
    path: 'linked-signal-container',
    loadComponent: () => import('./linked-signal/linked-signal-container').then(m => m.LinkedSignalContainer)
  },
  {
    path: 'debouncing',
    loadComponent: () => import('./debouncing/debouncing').then(m => m.Debouncing)
  },
  {
    path: 'conditional-rendering',
    loadComponent: () => import('./conditional-rendering/conditional-rendering').then(m => m.ConditionalRendering)
  },
  {
    path: 'http-resource',
    loadComponent: () => import('./http-resource/http-resource').then(m => m.HttpResource)
  }
];
