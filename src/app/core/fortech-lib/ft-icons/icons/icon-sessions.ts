import { Component, input } from '@angular/core';

@Component({
  selector: '[sessions-icon]',
  standalone: true,
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      class="icon"
      [class.selected]="selected()" 
      [class.disabled]="disabled()"
    >
      <path
        d="M10.8667 5.66667C11.6134 5.66667 11.9868 5.66667 12.272 5.52134C12.5229 5.39351 12.7268 5.18954 12.8547 4.93865C13 4.65344 13 4.28007 13 3.53333V3.13333C13 2.3866 13 2.01323 12.8547 1.72801C12.7268 1.47713 12.5229 1.27316 12.272 1.14533C11.9868 1 11.6134 1 10.8667 1L3.13333 1C2.3866 1 2.01323 1 1.72801 1.14532C1.47713 1.27316 1.27316 1.47713 1.14532 1.72801C1 2.01323 1 2.3866 1 3.13333L1 3.53333C1 4.28007 1 4.65344 1.14532 4.93865C1.27316 5.18954 1.47713 5.39351 1.72801 5.52134C2.01323 5.66667 2.3866 5.66667 3.13333 5.66667L10.8667 5.66667Z"
      />
      <path
        d="M10.8667 13C11.6134 13 11.9868 13 12.272 12.8547C12.5229 12.7268 12.7268 12.5229 12.8547 12.272C13 11.9868 13 11.6134 13 10.8667V10.4667C13 9.71993 13 9.34656 12.8547 9.06135C12.7268 8.81046 12.5229 8.60649 12.272 8.47866C11.9868 8.33333 11.6134 8.33333 10.8667 8.33333L3.13333 8.33333C2.3866 8.33333 2.01323 8.33333 1.72801 8.47866C1.47713 8.60649 1.27316 8.81046 1.14532 9.06135C1 9.34656 1 9.71993 1 10.4667L1 10.8667C1 11.6134 1 11.9868 1.14532 12.272C1.27316 12.5229 1.47713 12.7268 1.72801 12.8547C2.01323 13 2.3866 13 3.13333 13H10.8667Z"
      />
    </svg>
  `,
})
export class IconSessionsComponent {
  disabled = input<boolean>(false);
  selected = input<boolean>(false);
}
