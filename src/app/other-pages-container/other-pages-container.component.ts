import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-other-pages-container',
  templateUrl: './other-pages-container.component.html',
  styleUrls: ['./other-pages-container.component.scss']
})
export class OtherPagesContainerComponent implements OnInit {

  @Input() title: string
  @Input() icon: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
