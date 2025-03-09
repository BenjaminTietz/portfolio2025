import { Component } from "@angular/core";

@Component({
  selector: "app-language-switch",
  template: `
    <div class="language-switch">
      <span
        (click)="setLanguage('en')"
        [class.active]="currentLanguage === 'en'"
        >EN</span
      >
      <div class="slideway">
        <div class="slider" [class.active]="currentLanguage === 'de'"></div>
      </div>
      <span
        (click)="setLanguage('de')"
        [class.active]="currentLanguage === 'de'"
        >DE</span
      >
    </div>
  `,
  styles: [
    `
      .language-switch {
        display: flex;
        align-items: center;
        gap: 5px;
        cursor: pointer;
      }

      .language-switch span {
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
export class LanguageSwitchComponent {
  currentLanguage: string = "en";

  setLanguage(lang: string) {
    this.currentLanguage = lang;
  }
}
