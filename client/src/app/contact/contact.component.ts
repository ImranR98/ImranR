import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  constructor(private themeService: ThemeService) { }

  isDark: boolean = false;

  ngOnInit() {
    this.subscribeToIsDark();
  }

  subscribeToIsDark() {
    this.themeService.isDark.subscribe((isDark) => {
      this.isDark = isDark;
    })
  }

  contact: string = '../../assets/contact.png';

}
