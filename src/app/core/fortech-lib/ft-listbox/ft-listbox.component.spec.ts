import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FtListboxComponent } from './ft-listbox.component';
import { ListboxModule } from 'primeng/listbox';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { DividerModule } from 'primeng/divider';
import { SelectItemGroup, SelectItem } from 'primeng/api';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ComponentRef } from '@angular/core';
import { ListBox, SelectedElementList } from '../models';
import { ListboxClickEvent } from 'primeng/listbox';

describe('FtListboxComponent', () => {
  let component: FtListboxComponent;
  let componentRef: ComponentRef<FtListboxComponent>;
  let fixture: ComponentFixture<FtListboxComponent>;
  let sanitizer: DomSanitizer;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FtListboxComponent, 
        ListboxModule,
        FormsModule,
        TranslateModule.forRoot(),
        DividerModule
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FtListboxComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    sanitizer = TestBed.inject(DomSanitizer);

    // Imposta i segnali di input per il componente
    componentRef.setInput('options', [
      { label: 'Group 1', items: [{ label: 'Option 1', value: 1 }] },
      { label: 'Group 2', items: [{ label: 'Option 2', value: 2 }] }
    ] as SelectItemGroup[]);
    componentRef.setInput('isGroup', true);

    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('dovrebbe essere creato', () => {
    expect(component).toBeTruthy();
  });

  it('dovrebbe impostare correttamente la proprietà options', () => {
    const options: SelectItemGroup[] = [
      { label: 'Group 1', items: [{ label: 'Option 1', value: 1 }] },
      { label: 'Group 2', items: [{ label: 'Option 2', value: 2 }] }
    ];
    expect(component.options()).toEqual(options);
  });

  it('dovrebbe impostare correttamente la proprietà isGroup', () => {
    expect(component.isGroup()).toBeTrue();
  });

  it('dovrebbe emettere l\'evento elementSelected', () => {
    spyOn(component.elementSelected, 'emit');
    const event: ListboxClickEvent = {
      originalEvent: new MouseEvent('click'),
      value: null,
      option: { label: 'Option 1', value: 1 }
    };
    component.selectElement(event);
    expect(component.elementSelected.emit).toHaveBeenCalledWith({ label: 'Option 1', value: 1 });
  });

  it('dovrebbe sanificare l\'html correttamente', () => {
    const html = '<div>Test</div>';
    const sanitizedHtml: SafeHtml = component.sanitizeHtml(html);
    expect(sanitizer.bypassSecurityTrustHtml(html)).toEqual(sanitizedHtml);
  });
});
