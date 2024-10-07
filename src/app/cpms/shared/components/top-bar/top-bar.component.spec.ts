import { TestBed, ComponentFixture } from '@angular/core/testing';
import { TopBarComponent } from './top-bar.component';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { TranslateModule } from '@ngx-translate/core';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { StoreService } from '../../services/store.service';
import { FtDropdownComponent } from '../../../../core/fortech-lib/ft-dropdown/ft-dropdown.component';
import { FtAutocompleteComponent } from '../../../../core/fortech-lib/ft-autocomplete/ft-autocomplete.component';
import { FtChipComponent } from '../../../../core/fortech-lib/ft-chip/ft-chip.component';
import { FtListboxComponent } from '../../../../core/fortech-lib/ft-listbox/ft-listbox.component';
import { FtMenuComponent } from '../../../../core/fortech-lib/ft-menu/ft-menu.component';
import { IconsManagementComponent } from '../../../../core/fortech-lib/ft-icons/icons-management.component';
import { FtOverlaypanelComponent } from '../../../../core/fortech-lib/ft-overlaypanel/ft-overlaypanel.component';
import { Dropdown, AutoCompleteSuggestions, ListBox, UserMenu, InfoMenu } from '../../../../core/fortech-lib/models';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TopBarComponent', () => {
  let component: TopBarComponent;
  let fixture: ComponentFixture<TopBarComponent>;
  let storeService: jasmine.SpyObj<StoreService>;

  beforeEach(async () => {
    const storeServiceSpy = jasmine.createSpyObj('StoreService', ['getTopbarData']);

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        DropdownModule,
        FormsModule,
        FtDropdownComponent,
        FtAutocompleteComponent,
        FtChipComponent,
        FtListboxComponent,
        FtMenuComponent,
        IconsManagementComponent,
        FtOverlaypanelComponent,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: StoreService, useValue: storeServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TopBarComponent);
    component = fixture.componentInstance;
    storeService = TestBed.inject(StoreService) as jasmine.SpyObj<StoreService>;

    Object.defineProperty(storeService, 'optionsDropdown', { get: () => [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' }
    ] as Dropdown[] });

    Object.defineProperty(storeService, 'suggestionsAutocomplete', { get: () => [
      { label: 'Suggestion 1', section: { icon: 'icon1', section: 'Section 1' } },
      { label: 'Suggestion 2', section: { icon: 'icon2', section: 'Section 2' } }
    ] as AutoCompleteSuggestions[] });

    Object.defineProperty(storeService, 'itemsListBox', { get: () => [
      { icon: 'icon1', label: 'Item 1' },
      { icon: 'icon2', label: 'Item 2' }
    ] as ListBox[] });

    Object.defineProperty(storeService, 'settingProfile', { get: () => ({
      name: 'User Name',
      surname: 'User Surname',
      profile: {
        photoProfile: 'photo-url',
        label: 'User Name'
      },
      info: {
        label: 'Location',
        location: 'Somewhere'
      }
    } as UserMenu) });

    Object.defineProperty(storeService, 'settingMenu', { get: () => [
      { label: 'Menu Item 1', info: 'Info 1' },
      { label: 'Menu Item 2', info: 'Info 2' }
    ] as InfoMenu[] });

    fixture.detectChanges();
  });

  it('dovrebbe essere creato', () => {
    expect(component).toBeTruthy();
  });

  it('dovrebbe recuperare i valori per dropdownEMSP', () => {
    expect(component.dropdownEMSP()).toEqual([
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' }
    ] as Dropdown[]);
    expect(storeService.getTopbarData).toHaveBeenCalled();
  });

  it('dovrebbe recuperare i valori per autocompleteList', () => {
    expect(component.autocompleteList()).toEqual([
      { label: 'Suggestion 1', section: { icon: 'icon1', section: 'Section 1' } },
      { label: 'Suggestion 2', section: { icon: 'icon2', section: 'Section 2' } }
    ] as AutoCompleteSuggestions[]);
    expect(storeService.getTopbarData).toHaveBeenCalled();
  });

  it('dovrebbe recuperare i valori per listboxItem', () => {
    expect(component.listboxItem()).toEqual([
      { icon: 'icon1', label: 'Item 1' },
      { icon: 'icon2', label: 'Item 2' }
    ] as ListBox[]);
    expect(storeService.getTopbarData).toHaveBeenCalled();
  });

  it('dovrebbe recuperare i valori per settingProfile', () => {
    expect(component.settingProfile()).toEqual({
      name: 'User Name',
      surname: 'User Surname',
      profile: {
        photoProfile: 'photo-url',
        label: 'User Name'
      },
      info: {
        label: 'Location',
        location: 'Somewhere'
      }
    } as UserMenu);
    expect(storeService.getTopbarData).toHaveBeenCalled();
  });

  it('dovrebbe recuperare i valori per userMenu', () => {
    expect(component.userMenu()).toEqual([
      { label: 'Menu Item 1', info: 'Info 1' },
      { label: 'Menu Item 2', info: 'Info 2' }
    ] as InfoMenu[]);
    expect(storeService.getTopbarData).toHaveBeenCalled();
  });

  it('dovrebbe filtrare correttamente i suggerimenti per la barra di ricerca', () => {
    const event: AutoCompleteCompleteEvent = { query: 'Suggestion 1' } as AutoCompleteCompleteEvent;
    component.filterSearch(event);
    expect(component.filteredSearchAutocomplete).toEqual([
      { label: 'Suggestion 1', section: { icon: 'icon1', section: 'Section 1' } }
    ]);
  });
});
