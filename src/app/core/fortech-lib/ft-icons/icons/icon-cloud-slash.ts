import { Component, input } from '@angular/core';

@Component({
  selector: '[cloud-slash-icon]',
  standalone: true,
  template: `
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="icon"
      [class.selected]="selected()"
      [class.disabled]="disabled()"
    >
      <path
        d="M20.7003 14.1181C20.8939 13.616 21 13.0704 21 12.5C21 10.1564 19.2085 8.23129 16.9203 8.01937C16.4522 5.17213 13.9798 3 11 3C10.5534 3 10.1183 3.04879 9.69953 3.14132M6.28746 5.28585C5.67317 6.06419 5.24759 6.99838 5.07974 8.01937C2.79151 8.23129 1 10.1564 1 12.5C1 14.9853 3.01472 17 5.5 17H16.5C16.9561 17 17.3963 16.9322 17.8112 16.806M2 1L20 19"
      />
    </svg>
  `,
})
export class IconCloudSlashComponent {
  disabled = input<boolean>(false);
  selected = input<boolean>(false);
}
