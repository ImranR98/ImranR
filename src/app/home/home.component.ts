import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imageLoaded: boolean = false

  constructor() { }

  ngOnInit(): void { }

  loaded() {
    this.imageLoaded = true
  }
}
