import { Component } from "@angular/core";
import { ThemeService } from "../../../services/theme.service";

@Component({
  selector: "app-theme-toggle",
  template: `
    <div class="theme-switch">
      <span (click)="toggleTheme()" [class.active]="themeService.isDarkMode()"
        >🌙</span
      >
      <div class="slideway">
        <div class="slider" [class.active]="!themeService.isDarkMode()"></div>
      </div>
      <span (click)="toggleTheme()" [class.active]="!themeService.isDarkMode()"
        >🌞</span
      >
    </div>
  `,
  styles: [
    `
      .theme-switch {
        display: flex;
        align-items: center;
        gap: 5px;
        cursor: pointer;
      }

      .theme-switch span {
        font-size: 16px;
        font-weight: bold;
        color: var(--text-color);
        cursor: pointer;
        padding: 0 5px;
        user-select: none;
      }

      .slideway {
        position: relative;
        width: 32px;
        height: 8px;
        background: var(--secondary-color);
        border: solid 1px var(--text-color);
        border-radius: 4px;
      }

      .slider {
        position: absolute;
        width: 16px;
        height: 16px;
        background: var(--secondary-color);
        border-radius: 50%;
        border: solid 1px var(--text-color);
        top: -5px;
        right: -5px;
        transition: transform 0.3s ease-in-out;
      }

      .slider.active {
        transform: translateX(-20px);
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
