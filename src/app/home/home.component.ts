import { Component, OnInit } from '@angular/core';

/*
TODO:
- Add Skills
- Add Social icons in About
- Integrate # anchor tags if possible
- Try to organize CSS
- Add more lines (and improve existing ones) in description array
*/

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imageLoaded: boolean = false

  descriptionString = ''
  showCaret = false
  overrideShowCaret = false

  constructor() { }

  sleep(timeout: number): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, timeout);
    })
  }

  fadeIntoView(target: Element) {
    const options = {
      threshold: 0.5
    }
    let observer = new IntersectionObserver((intersection) => {
      console.log(intersection)
      if (intersection[0]?.isIntersecting || intersection[0]?.boundingClientRect.y < 0) target.classList.add('show')
      else target.classList.remove('show')
    }, options)
    observer.observe(target)
  }

  ngOnInit(): void {
    setTimeout(() => { // If X seconds go by w/o image load, show the page anyways
      if (!this.imageLoaded) this.loaded()
    }, 5000)
    window.addEventListener('scroll', this.scroll, true)

    let fadeIntoViewElements = document.getElementsByClassName('fadeIntoView')
    for (let i = 0; i < fadeIntoViewElements.length; i++) {
      this.fadeIntoView(fadeIntoViewElements[i])
    }
  }



  scroll() {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
      document.getElementsByClassName('about')[0]?.classList.add('scroll')
    } else {
      document.getElementsByClassName('about')[0]?.classList.remove('scroll')
    }
  }

  async typewriteDescriptions() {
    this.caretHeartbeat()
    while (true) {
      for (let i = 0; i < this.descriptions.length; i++) {
        this.descriptionString = ''
        this.overrideShowCaret = true
        for (let j = 0; j < this.descriptions[i].length; j++) {
          this.descriptionString += this.descriptions[i][j]
          await this.sleep(Math.random() * 150)
        }
        this.overrideShowCaret = false
        await this.sleep(3000)
        this.overrideShowCaret = true
        while (this.descriptionString.length > 0) {
          this.descriptionString = this.descriptionString.slice(0, this.descriptionString.length - 1)
          await this.sleep(20)
        }
        this.descriptionString = ''
        this.overrideShowCaret = false
      }
    }
  }

  async caretHeartbeat() {
    while (true) {
      this.showCaret = !this.showCaret
      await this.sleep(1000)
    }
  }

  loaded() {
    if (!this.imageLoaded) {
      this.imageLoaded = true
      this.typewriteDescriptions()
    }
  }

  descriptions = [
    'a Computer Science Student.',
    'interested in Web and App development.',
    'located in Toronto 🇨🇦.'
  ]
}
