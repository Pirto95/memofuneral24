import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FtDropdownComponent } from './ft-dropdown.component';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { IconsManagementComponent } from '../ft-icons/icons-management.component';
import { Dropdown } from '../models';
import { ComponentRef } from '@angular/core';

describe('FtDropdownComponent', () => {
  let component: FtDropdownComponent;
  let componentRef: ComponentRef<FtDropdownComponent>;
  let fixture: ComponentFixture<FtDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FtDropdownComponent, 
        DropdownModule,
        FormsModule,
        IconsManagementComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FtDropdownComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;

    // Imposta il segnale di input per il componente
    componentRef.setInput('itemDropdown', [{
      label: 'Option 1',
      value: '1',
      description: 'First option',
      disabled: false
    } as Dropdown]);

    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('dovrebbe essere creato', () => {
    expect(component).toBeTruthy();
  });

  it('dovrebbe impostare correttamente la proprietà itemDropdown', () => {
    const items: Dropdown[] = [{
      label: 'Option 1',
      value: '1',
      description: 'First option',
      disabled: false
    }];
    expect(component.itemDropdown()).toEqual(items);
  });

  it('dovrebbe avere infoSelected inizialmente undefined', () => {
    expect(component.infoSelected()).toBeUndefined();
  });

  it('dovrebbe impostare correttamente infoSelected', () => {
    const selected: Dropdown = {
      label: 'Option 1',
      value: '1',
      description: 'First option',
      disabled: false
    };
    component.infoSelected.set(selected);
    expect(component.infoSelected()).toEqual(selected);
  });
});
