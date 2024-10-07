import { Component, input } from '@angular/core';

@Component({
  selector: '[plus-icon]',
  standalone: true,
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      class="icon"
      [class.selected]="selected()" 
      [class.disabled]="disabled()"
    >
      <path
        d="M5.99992 1.3335V10.6668M1.33325 6.00016H10.6666"
      />
    </svg>
  `,
})
export class IconPlusComponent {
  disabled = input<boolean>(false);
  selected = input<boolean>(false);
}
