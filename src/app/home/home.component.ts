import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

/*
TODO:
- Integrate # anchor tags if possible
- Separate sections into components for maintainability
- Try to organize CSS (for maintainability and to possibly reduce repetition)
- Add more lines (and improve existing ones) in description array
*/

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  descriptionString = ''
  showCaret = false
  overrideShowCaret = false

  subscriptions: Subscription[] = []
  columnNum: number = 8

  constructor(media: MediaObserver) {
    this.subscriptions.push(media.asObservable().subscribe((change: MediaChange[]) => {
      if (change[0].mqAlias == 'xs') {
        this.columnNum = 2
      } else if (change[0].mqAlias == 'sm') {
        this.columnNum = 5
      } else if (change[0].mqAlias == 'md') {
        this.columnNum = 7
      } else if (change[0].mqAlias == 'lg') {
        this.columnNum = 10
      } else if (change[0].mqAlias == 'xl') {
        this.columnNum = 15
      } else {
        this.columnNum = 20
      }
    }))
  }

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
      if (intersection[0]?.isIntersecting || intersection[0]?.boundingClientRect.y < 0) target.classList.add('show')
      else target.classList.remove('show')
    }, options)
    observer.observe(target)
  }

  ngOnInit(): void {
    this.typewriteDescriptions()
    window.addEventListener('scroll', this.scroll, true)
  }

  ngAfterViewInit() {
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

  descriptions = [
    'a Computer Science Student.',
    'interested in Web and App development.',
    'located in Toronto 🇨🇦.'
  ]

  skillTree = [
    {
      title: 'Web',
      skills: [
        {
          image: '/static/images/nodejs.jpg',
          title: 'Node.js'
        },
        {
          image: '/static/images/angular.jpg',
          title: 'Angular'
        },
        {
          image: '/static/images/html.jpg',
          title: 'HTML'
        },
        {
          image: '/static/images/css.jpg',
          title: 'CSS'
        },
        {
          image: '/static/images/javascript.jpg',
          title: 'JavaScript'
        },
        {
          image: '/static/images/typescript.jpg',
          title: 'TypeScript'
        }
      ]
    },
    {
      title: 'Mobile',
      skills: [
        {
          image: '/static/images/flutter.jpg',
          title: 'Flutter'
        }
      ]
    },
    {
      title: 'Database',
      skills: [
        {
          image: '/static/images/mongodb.jpg',
          title: 'MongoDB'
        },
        {
          image: '/static/images/mysql.jpg',
          title: 'MySQL'
        },
        {
          image: '/static/images/postgresql.jpg',
          title: 'PostgreSQL'
        },
      ]
    },
    {
      title: 'Tools',
      skills: [
        {
          image: '/static/images/sublime.jpg',
          title: 'Sublime'
        },
        {
          image: '/static/images/vs.jpg',
          title: 'VS'
        },
        {
          image: '/static/images/vscode.jpg',
          title: 'VS Code'
        }
      ]
    },
    {
      title: 'Platforms',
      skills: [
        {
          image: '/static/images/apigee.jpg',
          title: 'Apigee'
        },
        {
          image: '/static/images/concourse.jpg',
          title: 'Concourse'
        },
        {
          image: '/static/images/heroku.jpg',
          title: 'Heroku'
        },
        {
          image: '/static/images/jira.jpg',
          title: 'Jira'
        },
        {
          image: '/static/images/pcf.jpg',
          title: 'PCF'
        },
        {
          image: '/static/images/servicenow.jpg',
          title: 'ServiceNOW'
        }
      ]
    },
    {
      title: 'Other',
      skills: [
        {
          image: '/static/images/bash.jpg',
          title: 'Bash'
        },
        {
          image: '/static/images/cpp.jpg',
          title: 'C++'
        },
        {
          image: '/static/images/git.jpg',
          title: 'Git'
        },
        {
          image: '/static/images/java.jpg',
          title: 'Java'
        },
        {
          image: '/static/images/linux.jpg',
          title: 'Linux'
        },
        {
          image: '/static/images/photoshop.jpg',
          title: 'Photoshop'
        }
      ]
    }
  ]

}
