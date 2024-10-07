import { Component, input } from '@angular/core';

@Component({
  selector: '[unlock-icon]',
  standalone: true,
  template: `
    <svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="icon"
      [class.selected]="selected()"
      [class.disabled]="disabled()"
    >
      <path
        d="M4 9V6C4 3.23858 6.23858 1 9 1C11.419 1 13.4367 2.71776 13.9 5M5.8 19H12.2C13.8802 19 14.7202 19 15.362 18.673C15.9265 18.3854 16.3854 17.9265 16.673 17.362C17 16.7202 17 15.8802 17 14.2V13.8C17 12.1198 17 11.2798 16.673 10.638C16.3854 10.0735 15.9265 9.6146 15.362 9.32698C14.7202 9 13.8802 9 12.2 9H5.8C4.11984 9 3.27976 9 2.63803 9.32698C2.07354 9.6146 1.6146 10.0735 1.32698 10.638C1 11.2798 1 12.1198 1 13.8V14.2C1 15.8802 1 16.7202 1.32698 17.362C1.6146 17.9265 2.07354 18.3854 2.63803 18.673C3.27976 19 4.11984 19 5.8 19Z"
      />
    </svg>
  `,
})
export class IconUnlockComponent {
  disabled = input<boolean>(false);
  selected = input<boolean>(false);
}
