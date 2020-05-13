import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
}
