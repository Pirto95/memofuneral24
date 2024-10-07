import { Component, input } from '@angular/core';

@Component({
  selector: '[close-icon]',
  standalone: true,
  template: `
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="icon"
      [class.selected]="selected()"
      [class.disabled]="disabled()"
    >
      <path
        d="M12.75 5.25L5.25 12.75M5.25 5.25L12.75 12.75"
      />
    </svg>
  `,
})
export class IconCloseComponent {
  disabled = input<boolean>(false);
  selected = input<boolean>(false);
}
