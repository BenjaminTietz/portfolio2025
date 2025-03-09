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
        <div
          class="slider"
          (click)="toggleLanguage()"
          [class.active]="currentLanguage === 'de'"
        ></div>
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
      @use "../../../styles/mixins" as mixins;
      @use "../../../styles/themes" as colors;

      .language-switch {
        display: flex;
        align-items: center;
        gap: 5px;
      }

      .language-switch span {
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        @include mixins.font-style(
          "Josefin Sans",
          700,
          16px,
          1.3,
          var(--text-color)
        );
        cursor: pointer;
        padding: 0 5px;
        user-select: none;
        border: solid 1px transparent;
        border-radius: 50%;
        transition: all 0.175s ease-in-out;
        &:hover {
          border: solid 1px var(--secondary-color);
          border-radius: 50%;
        }
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
        cursor: pointer;
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

  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === "en" ? "de" : "en";
  }
}
