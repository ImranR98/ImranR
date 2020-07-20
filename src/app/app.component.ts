import { Component, OnInit } from '@angular/core'
import { Router, RouterOutlet } from '@angular/router';
import { fader } from './route-animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fader]
})
export class AppComponent implements OnInit {
  title = 'Imran Remtulla';
  hideNav = false

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      this.hideNav = (this.router.url == '/' || this.router.url == '/home')
    })
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
