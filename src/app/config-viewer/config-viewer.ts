import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-config-viewer',
  imports: [],
  template: `
    <h3>Config panel</h3>
    <ul>
      <li>Is admin: {{ isAdmin() }}</li>
      <li>Is Dark mode: {{isDarkMode()}}</li>
      <li>Experimental: {{experimental()}} (is admin and show advanced)</li>
      <li>Region supports featureX: {{featureXSupported()}} (featureX present and region is EU))</li>
      <li>Legal banner showed: {{legalBannerVisible()}} (region is EU, not admin, and no suppress-legal feature)</li>
    </ul>

  `,
  styles: ``,
})
export class ConfigViewer {
  userRole = input<string>();
  theme = input<string>();
  showAdvanced = input<boolean>();
  region = input<string>();
  features = input<string>();

  isAdmin = computed(
    () => this.userRole() === 'admin'
  );

  isDarkMode = computed(
    () => this.theme() === 'dark'
  );

  experimental = computed(
    () => this.isAdmin()
       && this.showAdvanced()
  );

  featureXSupported = computed(
    () => this.region() === 'EU'
       && this.features()?.includes('featureX')
  );

  legalBannerVisible = computed(
    () => this.region() === 'EU'
       && !this.isAdmin()
       && !this.features()?.includes('suppress-legal')
  );

}
