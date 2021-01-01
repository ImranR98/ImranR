import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { fader } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fader]
})
export class AppComponent implements OnInit {
  title = 'ImranR';

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) { }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  ngOnInit() {
    this.matIconRegistry.addSvgIcon(
      "cancel",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/cancel.svg")
    )
  }
}
