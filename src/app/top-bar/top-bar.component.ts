import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  @ViewChild('topBar') topBar: HTMLElement | null = null;

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);
  }

  scroll() {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
      document.getElementsByClassName('topBar')[0].classList.add('scroll')
    } else {
      document.getElementsByClassName('topBar')[0].classList.remove('scroll')
    }
  }

}
