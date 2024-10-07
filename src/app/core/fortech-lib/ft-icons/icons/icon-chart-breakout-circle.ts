import { Component, input } from '@angular/core';

@Component({
  selector: '[chart-breakout-circle-icon]',
  standalone: true,
  template: `
    <svg
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="icon"
      [class.selected]="selected()"
      [class.disabled]="disabled()"
    >
      <path
        d="M19.0209 3.52051V1.58301M24.1092 4.89053L25.4792 3.52051M25.4925 9.97884H27.43M27.3529 15.7913C26.7049 22.3186 21.1978 27.4163 14.5 27.4163C7.36636 27.4163 1.58337 21.6334 1.58337 14.4997C1.58337 7.80193 6.68117 2.29484 13.2084 1.64678M14.5 9.33301H19.6667V14.4997M19.1755 9.33301C16.1344 13.6311 11.1241 16.4372 5.45837 16.4372C4.16296 16.4372 2.9018 16.2905 1.69061 16.0128"
      />
    </svg>
  `,
})
export class IconChartBreakoutCircleComponent {
  disabled = input<boolean>(false);
  selected = input<boolean>(false);
}
