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
      "menu",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/menu.svg")
    )
    this.matIconRegistry.addSvgIcon(
      "close",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/close.svg")
    )
    this.matIconRegistry.addSvgIcon(
      "down",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/down.svg")
    )
    this.matIconRegistry.addSvgIcon(
      "github",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/github.svg")
    )
    this.matIconRegistry.addSvgIcon(
      "medium",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/medium.svg")
    )
    this.matIconRegistry.addSvgIcon(
      "linkedin",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/linkedin.svg")
    )
    this.matIconRegistry.addSvgIcon(
      "email",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/email.svg")
    )
  }
}
