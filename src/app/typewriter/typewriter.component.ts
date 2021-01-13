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

  supportedEmoji = ['🇨🇦']

  descriptions = [
    'I\'m a Computer Science Student.',
    'I\'m interested in Web and App development.',
    'I\'m located in Toronto 🇨🇦.',
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

  findSupportedEmojiAtIndex(string: string, targetIndex: number): string | undefined {
    let isEmojiAtIndex = this.supportedEmoji.map(emoji => string.indexOf(emoji)).find(index => index == targetIndex) != undefined
    let emoji = undefined
    if (isEmojiAtIndex) emoji = string.slice(targetIndex, targetIndex + 4)
    return emoji
  }

  async typewriteDescriptions() {
    this.caretHeartbeat()
    while (true) {
      for (let i = 0; i < this.descriptions.length; i++) {
        this.descriptionString = ''
        this.overrideShowCaret = true
        for (let j = 0; j < this.descriptions[i].length; j++) {
          const possibleEmoji = this.findSupportedEmojiAtIndex(this.descriptions[i], j)
          if (possibleEmoji) {
            this.descriptionString += possibleEmoji
            j += possibleEmoji.length - 1
          } else this.descriptionString += this.descriptions[i][j]
          await this.sleep(Math.random() * 150)
        }
        this.overrideShowCaret = false
        await this.sleep(3000)
        this.overrideShowCaret = true
        while (this.descriptionString.length > 0) {
          const possibleEmoji = this.findSupportedEmojiAtIndex(this.descriptionString, this.descriptionString.length - 4)
          if (possibleEmoji) {
            this.descriptionString = this.descriptionString.slice(0, this.descriptionString.length - possibleEmoji.length)
          } else this.descriptionString = this.descriptionString.slice(0, this.descriptionString.length - 1)
          await this.sleep(20)
        }
        this.descriptionString = ''
        this.overrideShowCaret = false
      }
    }
  }

}
