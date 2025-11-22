import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface NavItem {
  title: string;
  link: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-signal');
  protected readonly navItems: NavItem[] = [
    { title: 'Simple counter', link: '/simple-counter' },
    { title: 'LinkedSignal', link: '/linked-signal-container' },
    { title: 'Debouncing', link: '/debouncing' },
    { title: 'Conditional Rendering', link: '/conditional-rendering' },
    { title: 'HTTP resource', link: '/http-resource' },
    { title: 'Config Tool', link: '/config-tool' },
  ];
}
