import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sticky-bar',
  templateUrl: './sticky-bar.component.html',
  styleUrls: ['./sticky-bar.component.scss']
})
export class StickyBarComponent implements OnInit {
  @Input() bottom: boolean = false
  @Input() divider: boolean = true
  @Input() contentHeight: string = '4em'

  constructor() { }

  ngOnInit(): void {
  }

}
