import { Component, input } from '@angular/core';

@Component({
  selector: '[euro-icon]',
  standalone: true,
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="14"
      viewBox="0 0 13 14"
      fill="none"
      class="icon"
      [class.selected]="selected()" 
      [class.disabled]="disabled()"
    >
      <path
        d="M11.6667 2.67952C10.6784 1.83999 9.39834 1.3335 8 1.3335C4.87039 1.3335 2.33333 3.87055 2.33333 7.00016C2.33333 10.1298 4.87039 12.6668 8 12.6668C9.39834 12.6668 10.6784 12.1603 11.6667 11.3208M1 8.3335H7.66667M1 5.66683H7.66667"
      />
    </svg>
  `,
})
export class IconEuroComponent {
  disabled = input<boolean>(false);
  selected = input<boolean>(false);
}
