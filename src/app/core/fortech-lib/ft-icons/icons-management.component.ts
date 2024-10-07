import { Component, ViewEncapsulation, input } from '@angular/core';
import { IconEuroComponent } from './icons/icon-euro';
import { IconHomeComponent } from './icons/icon-home';
import { IconLightningComponent } from './icons/icon-lightning';
import { IconPlusComponent } from './icons/icon-plus';
import { IconSessionsComponent } from './icons/icon-sessions';
import { IconLockComponent } from './icons/icon-lock';
import { IconBellComponent } from './icons/icon-bell';
import { IconQuestionCircleComponent } from './icons/icon-question-circle';
import { IconDotsGridComponent } from './icons/icon-dots-grid';
import { IconExclamationTriangleComponent } from './icons/icon-exclamation-triangle';
import { IconCheckCircleComponent } from './icons/icon-check-circle';
import { IconUnlockComponent } from './icons/icon-unlock';
import { IconCloudSlashComponent } from './icons/icon-cloud-slash';
import { IconSearchComponent } from './icons/icon-search';
import { IconCheckComponent } from './icons/icon-check';
import { IconCloseComponent } from './icons/icon-close';
import { IconChartBreakoutCircleComponent } from './icons/icon-chart-breakout-circle';
import { IconGitBranchComponent } from './icons/icon-git-branch';

@Component({
  selector: 'ft-icons',
  standalone: true,
  imports: [
    IconSessionsComponent,
    IconPlusComponent,
    IconLightningComponent,
    IconHomeComponent,
    IconEuroComponent,
    IconLockComponent,
    IconBellComponent,
    IconQuestionCircleComponent,
    IconDotsGridComponent,
    IconExclamationTriangleComponent,
    IconCheckCircleComponent,
    IconUnlockComponent,
    IconCloudSlashComponent,
    IconSearchComponent,
    IconCheckComponent,
    IconCloseComponent,
    IconChartBreakoutCircleComponent,
    IconGitBranchComponent
  ],
  templateUrl: './icons-management.component.html',
  styleUrl: './icons-management.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class IconsManagementComponent {
  iconName = input.required<string>();
  selected  = input<boolean>(false);
  disabled  = input<boolean>(false);
}
