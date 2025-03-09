import { Component } from '@angular/core';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-header',
  imports: [ThemeToggleComponent, LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
