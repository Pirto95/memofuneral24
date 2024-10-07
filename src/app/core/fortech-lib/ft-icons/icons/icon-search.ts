import { Component, input } from '@angular/core';

@Component({
  selector: '[search-icon]',
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
        d="M14.75 14.75L10.2501 10.25M11.75 6.5C11.75 9.3995 9.3995 11.75 6.5 11.75C3.6005 11.75 1.25 9.3995 1.25 6.5C1.25 3.6005 3.6005 1.25 6.5 1.25C9.3995 1.25 11.75 3.6005 11.75 6.5Z"
      />
    </svg>
  `,
})
export class IconSearchComponent {
  disabled = input<boolean>(false);
  selected = input<boolean>(false);
}
