import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkModeEnabled = false;

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.enableDarkMode();
    }
  }

  enableDarkMode() {
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
    this.darkModeEnabled = true;
  }

  disableDarkMode() {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
    this.darkModeEnabled = false;
  }

  toggleTheme() {
    if (this.darkModeEnabled) {
      this.disableDarkMode();
    } else {
      this.enableDarkMode();
    }
  }

  isDarkMode(): boolean {
    return this.darkModeEnabled;
  }
}
