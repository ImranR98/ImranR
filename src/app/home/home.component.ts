import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  constructor() { }

  fadeIntoView(target: Element) {
    const options = {
      threshold: 0.5
    }
    let observer = new IntersectionObserver((intersection) => {
      if (intersection[0]?.isIntersecting || intersection[0]?.boundingClientRect.y < 0) target.classList.add('show')
      else target.classList.remove('show')
    }, options)
    observer.observe(target)
  }

  ngAfterViewInit() {
    let fadeIntoViewElements = document.getElementsByClassName('fadeIntoView')
    for (let i = 0; i < fadeIntoViewElements.length; i++) {
      this.fadeIntoView(fadeIntoViewElements[i])
    }
  }

}
