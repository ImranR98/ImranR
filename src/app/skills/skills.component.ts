import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnDestroy {

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

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }

}
