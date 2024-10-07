import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NavBarComponent } from './nav-bar.component';
import { FtNavListComponent } from '../../../../core/fortech-lib/ft-nav-list/ft-nav-list.component';
import { FtListboxComponent } from '../../../../core/fortech-lib/ft-listbox/ft-listbox.component';
import { StoreService } from '../../services/store.service';
import { SelectItemGroup } from 'primeng/api';
import { NavList, SelectItem } from '../../../../core/fortech-lib/models';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;
  let storeService: jasmine.SpyObj<StoreService>;
  let router: Router;

  beforeEach(async () => {
    const storeServiceSpy = jasmine.createSpyObj('StoreService', ['getNavbarData']);

    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FtNavListComponent,
        FtListboxComponent,
        NavBarComponent,
        RouterModule.forRoot([]),
        BrowserAnimationsModule,
        TranslateModule.forRoot(),
      ],
      providers: [
        { provide: StoreService, useValue: storeServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    storeService = TestBed.inject(StoreService) as jasmine.SpyObj<StoreService>;
    router = TestBed.inject(Router);

    Object.defineProperty(storeService, 'navbarData', { get: () => ({
      menu: [
        { icon: 'home', label: 'Home', link: '/home', badge: 1, disabled: false },
        { icon: 'settings', label: 'Settings', link: '/settings', badge: 2, disabled: false }
      ] as NavList[],
      submenu: [
        { label: 'Group 1', items: [{ label: 'Option 1', value: 1 }] },
        { label: 'Group 2', items: [{ label: 'Option 2', value: 2 }] }
      ] as SelectItemGroup[]
    }) });

    fixture.detectChanges();
  });

  it('dovrebbe essere creato', () => {
    expect(component).toBeTruthy();
  });

  it('dovrebbe ottenere gli elementi della barra laterale da storeService', () => {
    const navbarItems = component.navbarItems();
    expect(navbarItems.menu.length).toBe(2);
    expect(navbarItems.menu).toEqual([
      { icon: 'home', label: 'Home', link: '/home', badge: 1, disabled: false },
      { icon: 'settings', label: 'Settings', link: '/settings', badge: 2, disabled: false }
    ] as NavList[]);
    expect(storeService.getNavbarData).toHaveBeenCalled();
  });

  it('dovrebbe ottenere le opzioni da storeService', () => {
    const navbarItems = component.navbarItems();
    expect(navbarItems.submenu.length).toBe(2);
    expect(navbarItems.submenu).toEqual([
      { label: 'Group 1', items: [{ label: 'Option 1', value: 1 }] },
      { label: 'Group 2', items: [{ label: 'Option 2', value: 2 }] }
    ] as SelectItemGroup[]);
    expect(storeService.getNavbarData).toHaveBeenCalled();
  });

  it('dovrebbe impostare la rotta attiva come stringa', () => {
    spyOn(router, 'navigate');
    component.changeRoute('settings');
    expect(router.navigate).toHaveBeenCalledWith(['settings']);
  });

  it('dovrebbe impostare la rotta attiva come SelectItem', () => {
    spyOn(router, 'navigate');
    const route: SelectItem = { label: 'Settings', value: 'settings' };
    component.changeRoute(route);
    expect(router.navigate).toHaveBeenCalledWith(['settings']);
  });
});
