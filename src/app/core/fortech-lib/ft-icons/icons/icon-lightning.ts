import { Component, input } from '@angular/core';

@Component({
  selector: '[lightning-icon]',
  standalone: true,
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      class="icon"
      [class.selected]="selected()" 
      [class.disabled]="disabled()"
    >
      <path
        d="M7.66674 1.3335L1.72904 8.45873C1.4965 8.73778 1.38023 8.8773 1.37846 8.99514C1.37691 9.09757 1.42256 9.19503 1.50224 9.25943C1.5939 9.3335 1.77552 9.3335 2.13876 9.3335H7.00007L6.3334 14.6668L12.2711 7.54159C12.5036 7.26255 12.6199 7.12302 12.6217 7.00519C12.6232 6.90275 12.5776 6.80529 12.4979 6.7409C12.4062 6.66683 12.2246 6.66683 11.8614 6.66683H7.00007L7.66674 1.3335Z"

      />
    </svg>
  `,
})
export class IconLightningComponent {
  disabled = input<boolean>(false);
  selected = input<boolean>(false);
}
