import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkModeEnabled = false;

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    this.darkModeEnabled = savedTheme === 'dark';
    this.applyTheme();
  }

  private applyTheme() {
    if (this.darkModeEnabled) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  enableDarkMode() {
    this.darkModeEnabled = true;
    localStorage.setItem('theme', 'dark');
    this.applyTheme();
  }

  disableDarkMode() {
    this.darkModeEnabled = false;
    localStorage.setItem('theme', 'light');
    this.applyTheme();
  }

  toggleTheme() {
    this.darkModeEnabled = !this.darkModeEnabled;
    localStorage.setItem('theme', this.darkModeEnabled ? 'dark' : 'light');
    this.applyTheme();
  }

  isDarkMode(): boolean {
    return this.darkModeEnabled;
  }
}
