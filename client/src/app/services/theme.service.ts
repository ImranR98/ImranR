import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  isDarkSource = new BehaviorSubject(false);
  isDark = this.isDarkSource.asObservable();

  constructor() { }

  updateIsDark(isDark: boolean) {
    this.isDarkSource.next(isDark);
    localStorage.setItem('isDark', JSON.stringify(isDark));
  }

  loadStoredIsDark() {
    let isDarkStored = localStorage.getItem('isDark');
    if (isDarkStored) {
      this.updateIsDark(JSON.parse(isDarkStored));
    } else {
      this.updateIsDark(false);
    }
  }

  toggleIsDark() {
    this.updateIsDark(!this.isDarkSource.value);
  }
}
