import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true)
    setTimeout(() => { // If image doesn't load in 5 seconds, show the outline anyways
      this.showMe()
    }, 5000);
  }

  scroll() {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
      document.getElementsByClassName('about')[0]?.classList.add('scroll')
    } else {
      document.getElementsByClassName('about')[0]?.classList.remove('scroll')
    }
  }

  showMe() {
    document.getElementsByClassName('me')[0]?.classList.add('show')
  }

}
