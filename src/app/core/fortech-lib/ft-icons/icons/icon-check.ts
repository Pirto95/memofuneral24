import { Component, input } from '@angular/core';

@Component({
  selector: '[check-icon]',
  standalone: true,
  template: `
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="icon"
      [class.selected]="selected()"
      [class.disabled]="disabled()"
    >
      <path
        d="M13.3333 4L5.99996 11.3333L2.66663 8"
      />
    </svg>
  `,
})
export class IconCheckComponent {
  disabled = input<boolean>(false);
  selected = input<boolean>(false);
}
