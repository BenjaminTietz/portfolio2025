import { Component } from '@angular/core';
import { ThemeToggleComponent } from '../shared/theme-toggle/theme-toggle.component';
import { LogoComponent } from '../logo/logo.component';
import { LanguageSwitchComponent } from '../shared/language-toggle/language-toggle.component';

@Component({
  selector: 'app-header',
  imports: [ThemeToggleComponent, LogoComponent, LanguageSwitchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  menuOpen = false;
  currentLanguage = 'en';

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  setLanguage(language: string) {
    this.currentLanguage = language;
  }
}
