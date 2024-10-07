import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FtChipComponent } from './ft-chip.component';
import { FormsModule } from '@angular/forms';
import { ChipModule } from 'primeng/chip';
import { SettingProfile } from '../models';
import { ComponentRef } from '@angular/core';

describe('FtChipComponent', () => {
  let component: FtChipComponent;
  let componentRef: ComponentRef<FtChipComponent>;
  let fixture: ComponentFixture<FtChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FtChipComponent,
        FormsModule,
        ChipModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FtChipComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;

    // Imposta il segnale di input per il componente
    componentRef.setInput('dataProfile', {
      photoProfile: 'test-photo-url',
      label: 'Test Label'
    } as SettingProfile);

    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('dovrebbe essere creato', () => {
    expect(component).toBeTruthy();
  });

  it('dovrebbe impostare correttamente la proprietà dataProfile', () => {
    const profile: SettingProfile = {
      photoProfile: 'test-photo-url',
      label: 'Test Label'
    };
    expect(component.dataProfile()).toEqual(profile);
  });
});
