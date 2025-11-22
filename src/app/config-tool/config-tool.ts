import { Component } from '@angular/core';
import { ConfigViewer } from "../config-viewer/config-viewer";

@Component({
  selector: 'app-config-tool',
  imports: [ConfigViewer],
  template: `
    <div>
      <h1>Configuration Tool</h1>
    </div>

    <app-config-viewer></app-config-viewer>
  `,
  styles: ``,
})
export class ConfigTool {

}
