import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

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

  ngOnInit(): void { }

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
    this.imageLoaded = true
    this.typewriteDescriptions()
  }

  descriptions = [
    'a Computer Science Student.',
    'interested in Web and App development.',
    'located in Toronto 🇨🇦.'
  ]
}
