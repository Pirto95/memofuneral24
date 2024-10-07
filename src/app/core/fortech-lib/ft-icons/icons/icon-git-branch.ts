import { Component, input } from '@angular/core';

@Component({
  selector: '[git-branch-icon]',
  standalone: true,
  template: `
    <svg
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="icon"
      [class.selected]="selected()"
      [class.disabled]="disabled()"
    >
      <path
        d="M1.875 1.875V15.05C1.875 17.2202 1.875 18.3053 2.29735 19.1342C2.66886 19.8633 3.26166 20.4561 3.99079 20.8276C4.81969 21.25 5.9048 21.25 8.075 21.25H17.375M17.375 21.25C17.375 23.3901 19.1099 25.125 21.25 25.125C23.3901 25.125 25.125 23.3901 25.125 21.25C25.125 19.1099 23.3901 17.375 21.25 17.375C19.1099 17.375 17.375 19.1099 17.375 21.25ZM1.875 8.33333L17.375 8.33333M17.375 8.33333C17.375 10.4734 19.1099 12.2083 21.25 12.2083C23.3901 12.2083 25.125 10.4734 25.125 8.33333C25.125 6.19323 23.3901 4.45833 21.25 4.45833C19.1099 4.45833 17.375 6.19323 17.375 8.33333Z"
      />
    </svg>
  `,
})
export class IconGitBranchComponent {
  disabled = input<boolean>(false);
  selected = input<boolean>(false);
}
