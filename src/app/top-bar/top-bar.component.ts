import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  @ViewChild('topBar') topBar: HTMLElement | null = null;

  constructor(private router: Router) { }

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

  sleep(timeout: number): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, timeout);
    })
  }

  async navigate(e: Event, target: string) {
    let exception = (!document.getElementsByClassName('topBar')[0]?.classList.contains('scroll') && target == 'about')
    if (!exception) {
      e.preventDefault()
      const element = document.getElementById(target)
      if (element) {
        if (!document.getElementsByClassName('topBar')[0]?.classList.contains('scroll')) {
          window.scrollBy({ top: 10 })
          await this.sleep(500)
        }
        const offset = 50
        const bodyRect = document.body.getBoundingClientRect().top
        const elementRect = element.getBoundingClientRect().top
        const elementPosition = elementRect - bodyRect
        const offsetPosition = elementPosition - offset
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
  }
}
