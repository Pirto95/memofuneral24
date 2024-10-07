import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IconsManagementComponent } from './icons-management.component';
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
import { ComponentRef } from '@angular/core';

describe('IconsManagementComponent', () => {
  let component: IconsManagementComponent;
  let componentRef: ComponentRef<IconsManagementComponent>;
  let fixture: ComponentFixture<IconsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        IconsManagementComponent,
        IconEuroComponent,
        IconHomeComponent,
        IconLightningComponent,
        IconPlusComponent,
        IconSessionsComponent,
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
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(IconsManagementComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;

    // Imposta i segnali di input per il componente
    componentRef.setInput('iconName', 'icon-home');
    componentRef.setInput('selected', true);
    componentRef.setInput('disabled', false);

    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('dovrebbe essere creato', () => {
    expect(component).toBeTruthy();
  });

  it('dovrebbe impostare correttamente la proprietà iconName', () => {
    expect(component.iconName()).toEqual('icon-home');
  });

  it('dovrebbe impostare correttamente la proprietà selected', () => {
    expect(component.selected()).toBeTrue();
  });

  it('dovrebbe impostare correttamente la proprietà disabled', () => {
    expect(component.disabled()).toBeFalse();
  });
});
