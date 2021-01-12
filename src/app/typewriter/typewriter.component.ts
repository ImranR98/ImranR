import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typewriter',
  templateUrl: './typewriter.component.html',
  styleUrls: ['./typewriter.component.scss']
})
export class TypewriterComponent implements OnInit {

  constructor() { }

  descriptionString = ''
  showCaret = false
  overrideShowCaret = false

  emojiArray = ['🇨🇦']

  descriptions = [
    'I\'m a Computer Science Student.',
    'I\'m interested in Web and App development.',
    'I\'m located in Toronto emoji0.',
  ]

  ngOnInit(): void {
    this.typewriteDescriptions()
  }

  sleep(timeout: number): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, timeout);
    })
  }

  async caretHeartbeat() {
    while (true) {
      this.showCaret = !this.showCaret
      await this.sleep(1000)
    }
  }

  async typewriteDescriptions() {
    const emojiRegex = new RegExp('^emoji[0-9]*')
    this.caretHeartbeat()
    while (true) {
      for (let i = 0; i < this.descriptions.length; i++) {
        this.descriptionString = ''
        this.overrideShowCaret = true
        for (let j = 0; j < this.descriptions[i].length; j++) {
          let isEmoji = false
          try {
            const emoji = emojiRegex.exec(this.descriptions[i].slice(j))
            if (emoji?.length) {
              let index = Number.parseInt(emoji[0].slice(5))
              if (this.emojiArray[index]) {
                this.descriptionString += this.emojiArray[index]
                j+=5
                isEmoji = true
              }
            }
          } catch (err) {

          }
          if (!isEmoji)
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

}
