import { Component, OnInit, ViewChild } from '@angular/core';

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
    document.getElementsByClassName('menuOverlay')[0]?.classList.add('hidden')
    setTimeout(() => {
      document.getElementsByClassName('menuOverlay')[0]?.classList.remove('hidden')
    }, 1000)
  }

  scroll() {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
      document.getElementsByClassName('topBar')[0]?.classList.add('scroll')
    } else {
      document.getElementsByClassName('topBar')[0]?.classList.remove('scroll')
    }
  }

  toggleMenu(show: boolean) {
    let element = document.getElementsByClassName('menuOverlay')[0]
    if (show) element.classList.add('show')
    else element.classList.remove('show')
  }
}
