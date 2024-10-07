import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ComponentFixture } from '@angular/core/testing';
import { FtAutocompleteComponent } from './ft-autocomplete.component';
import { DividerModule } from 'primeng/divider';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { IconsManagementComponent } from '../ft-icons/icons-management.component';
import { AutoCompleteSuggestions } from '../models';
import { ComponentRef } from '@angular/core';

describe('FtAutocompleteComponent', () => {
  let component: FtAutocompleteComponent;
  let componentRef: ComponentRef<FtAutocompleteComponent>;
  let fixture: ComponentFixture<FtAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FtAutocompleteComponent,
        DividerModule,
        FormsModule,
        TranslateModule.forRoot(),
        AutoCompleteModule,
        IconsManagementComponent,
        InputIconModule,
        IconFieldModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FtAutocompleteComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;

    componentRef.setInput('suggestionsList', [
      {
        label: 'Test',
        section: { icon: 'test-icon', section: 'TestSection' },
      },
    ]);

    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('dovrebbe essere creato correttamente', () => {
    expect(component).toBeTruthy();
  });

  it("dovrebbe emettere l'evento di filtro", () => {
    spyOn(component.filter, 'emit');
    const event: AutoCompleteCompleteEvent = {
      originalEvent: new Event('input'),
      query: 'test',
    };
    component.filterSearch(event);
    expect(component.filter.emit).toHaveBeenCalledWith(event);
  });

  it('dovrebbe avere il placeholder undefined inizialmente', () => {
    expect(component.placeholder()).toBeUndefined();
  });

  it('dovrebbe avere il placeholder diverso da undefined', fakeAsync(() => {
    componentRef.setInput('placeholder', 'test');
    fixture.detectChanges();
    tick();
    expect(component.placeholder()).toEqual('test');
  }));

  it('dovrebbe impostare correttamente suggestionsList', () => {
    const suggestions: AutoCompleteSuggestions[] = [
      { label: 'Test', section: { icon: 'test-icon', section: 'TestSection' } },
    ];
    expect(component.suggestionsList()).toEqual(suggestions);
  });
});
