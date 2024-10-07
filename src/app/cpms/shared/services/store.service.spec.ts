import { TestBed } from '@angular/core/testing';
import { StoreService } from './store.service';
import { GenericapiService } from './generic-api.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { provideHttpClient } from '@angular/common/http';
import { Dropdown, InfoMenu, ListBox, NavBarData, UserMenu, AutoCompleteSuggestions } from '../../../core/fortech-lib/models';

describe('StoreService', () => {
  let service: StoreService;
  let genericapiService: jasmine.SpyObj<GenericapiService>;

  beforeEach(() => {
    const genericapiServiceSpy = jasmine.createSpyObj('GenericapiService', ['getData']);

    TestBed.configureTestingModule({
      providers: [
        StoreService,
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: GenericapiService, useValue: genericapiServiceSpy }
      ]
    });

    service = TestBed.inject(StoreService);
    genericapiService = TestBed.inject(GenericapiService) as jasmine.SpyObj<GenericapiService>;

    genericapiService.getData.and.callFake((endpoint: string) => {
      switch (endpoint) {
        case 'nevbar':
          return of({
            menu: [
              { icon: 'home', label: 'Home', link: '/home', badge: 1, disabled: false },
              { icon: 'settings', label: 'Settings', link: '/settings', badge: 2, disabled: false }
            ],
            submenu: [
              { label: 'Group 1', items: [{ label: 'Option 1', value: 1 }] },
              { label: 'Group 2', items: [{ label: 'Option 2', value: 2 }] }
            ]
          } as NavBarData);
        case 'dropdownOptionseMSP':
          return of([{ label: 'Option 1', value: '1', description: 'Descrizione 1', disabled: false }] as Dropdown[]);
        case 'autocompleteList':
          return of([{ label: 'Suggestion 1', section: { icon: 'icon1', section: 'Section 1' } }] as AutoCompleteSuggestions[]);
        case 'listboxItem':
          return of([{ icon: 'icon1', label: 'Item 1' }] as ListBox[]);
        case 'userProfile':
          return of({
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
        default:
          return of([]);
      }
    });
  });

  it('dovrebbe essere creato', () => {
    expect(service).toBeTruthy();
  });

  it('dovrebbe recuperare i dati della barra di navigazione quando viene chiamato getNavbarData', () => {
    service.getNavbarData();
    expect(genericapiService.getData).toHaveBeenCalledWith('nevbar');
    const navbarData = service.navbarData;
    expect(navbarData.menu.length).toBe(2);
    expect(navbarData.menu[0].label).toBe('Home');
  });

  it('dovrebbe recuperare i dati per la topbar quando viene chiamato getTopbarData', () => {
    service.getTopbarData();
    expect(genericapiService.getData).toHaveBeenCalledWith('dropdownOptionseMSP');
    expect(genericapiService.getData).toHaveBeenCalledWith('userProfile');
    expect(genericapiService.getData).toHaveBeenCalledWith('listboxItem');
    expect(genericapiService.getData).toHaveBeenCalledWith('autocompleteList');

    const dropdownData = service.optionsDropdown;
    expect(dropdownData.length).toBe(1);
    expect(dropdownData[0].label).toBe('Option 1');

    const profileData = service.settingProfile;
    expect(profileData.name).toBe('User Name');

    const listBoxData = service.itemsListBox;
    expect(listBoxData.length).toBe(1);
    expect(listBoxData[0].label).toBe('Item 1');

    const autoCompleteData = service.suggestionsAutocomplete;
    expect(autoCompleteData.length).toBe(1);
    expect(autoCompleteData[0].label).toBe('Suggestion 1');
  });
});
