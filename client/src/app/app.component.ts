import { Component, HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'AngularNodeClient';
  isDark: boolean = true;
  @HostBinding('class') componentCssClass;

  constructor(public overlayContainer: OverlayContainer, private themeService: ThemeService) { }

  ngOnInit() {
    this.themeService.loadStoredIsDark();
    this.subscribeToIsDark();
  }

  subscribeToIsDark() {
    this.themeService.isDark.subscribe((isDark: boolean) => {
      this.isDark = isDark;
      if (isDark) {
        this.onSetTheme('dark-theme');
      } else {
        this.onSetTheme('light-theme');
      }
    })
  }

  onSetTheme(theme) {
    const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
    const themeClassesToRemove = Array.from(overlayContainerClasses).filter((item: string) => item.includes('-theme'));
    if (themeClassesToRemove.length) {
      overlayContainerClasses.remove(...themeClassesToRemove);
    }
    overlayContainerClasses.add(theme);
    this.componentCssClass = theme;
  }

  toggleTheme() {
    this.themeService.toggleIsDark();
  }
}
