import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.sass']
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  education: string = '../../assets/education.png';

}
