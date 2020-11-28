import { Component, OnInit } from '@angular/core'
import { Router, RouterOutlet } from '@angular/router';
import { fader } from './route-animations'
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fader]
})
export class AppComponent implements OnInit {
  title = 'Imran Remtulla';
  hideNav = false

  constructor(private router: Router, private titleService: Title, private metaService: Meta) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      this.hideNav = (this.router.url == '/' || this.router.url == '/home')
    })
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {name: 'keywords', content: 'Imran, Remtulla, Resume, CV, Profile'},
      {name: 'description', content: 'Computer Science student with a passion for learning and an interest in Web and App development.'}
    ]);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
