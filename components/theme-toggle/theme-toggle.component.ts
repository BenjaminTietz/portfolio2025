import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  template: `
    <button (click)="toggleTheme()">
      {{ themeService.isDarkMode() ? '🌞 Light Mode' : '🌙 Dark Mode' }}
    </button>
  `,
  styles: [
    `
      button {
        padding: 8px 12px;
        border: none;
        cursor: pointer;
        background-color: var(--text-color-dark);
        color: var(--background-color);
        border-radius: 5px;
        font-size: 16px;
      }
    `,
  ],
})
export class ThemeToggleComponent {
  constructor(public themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
