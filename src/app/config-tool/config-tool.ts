import { Component, effect, signal } from '@angular/core';
import { ConfigViewer } from "../config-viewer/config-viewer";

@Component({
  selector: 'app-config-tool',
  imports: [ConfigViewer],
  template: `
    <div>
      <label for="show-advanced">Show Advanced:</label>
      <input
        type="checkbox" id="show-advanced"
        [checked]="showAdvanced()"
        (change)="showAdvanced.set($event.target.checked)" />
    </div>


    <div>
      <label for="theme-select">Theme:</label>
      <select
        id="theme-select"
        [value]="theme()"
        (change)="handleThemeChange($event)">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>

    <div>
    <label for="user-role">User role</label>
    <input
      type="text"
      id="user-role"
      [value]="userRole()"
      (change)="userRole.set($event.target.value)"
      />
    </div>

    <div>
    <label for="region">Region</label>
    <input
      type="text"
      id="region"
      [value]="region()"
      (change)="region.set($event.target.value)"
      />
    </div>
    <div>
    <label for="features">Feature flags</label>
    <input
      type="text"
      id="features"
      [value]="features()"
      (change)="features.set($event.target.value)"
      />
    </div>


    <app-config-viewer
      [userRole]="userRole()"
      [theme]="theme()"
      [showAdvanced]="showAdvanced()"
      [region]="region()"
      [features]="features()">
    </app-config-viewer>
  `,
  styles: ``,
})
export class ConfigTool {
  showAdvanced = signal(false);
  theme = signal<string>('light');
  userRole = signal<string>('guest');
  region = signal<string>('us-east-1');
  features = signal<string>('');

  handleThemeChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.theme.set(selectElement.value as 'light' | 'dark');
  }


}
