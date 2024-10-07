import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FtNavListComponent } from './ft-nav-list.component';
import { IconsManagementComponent } from '../ft-icons/icons-management.component';
import { NavList } from '../models';
import { ComponentRef } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

describe('FtNavListComponent', () => {
  let component: FtNavListComponent;
  let componentRef: ComponentRef<FtNavListComponent>;
  let fixture: ComponentFixture<FtNavListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FtNavListComponent, 
        IconsManagementComponent,
        TranslateModule.forRoot(),
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FtNavListComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;

    // Imposta i segnali di input per il componente
    componentRef.setInput('items', [
      { icon: 'home', label: 'Home', link: '/home', badge: 1, disabled: false },
      { icon: 'settings', label: 'Settings', link: '/settings', badge: 2, disabled: false }
    ] as NavList[]);
    componentRef.setInput('routeActive', '/home');

    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('dovrebbe essere creato', () => {
    expect(component).toBeTruthy();
  });

  it('dovrebbe impostare correttamente la proprietà items', () => {
    const items: NavList[] = [
      { icon: 'home', label: 'Home', link: '/home', badge: 1, disabled: false },
      { icon: 'settings', label: 'Settings', link: '/settings', badge: 2, disabled: false }
    ];
    expect(component.items()).toEqual(items);
  });

  it('dovrebbe impostare correttamente la proprietà routeActive', () => {
    expect(component.routeActive()).toEqual('/home');
  });

  it('dovrebbe emettere l\'evento route', () => {
    spyOn(component.route, 'emit');
    const route = '/settings';
    component.routeSelected(route);
    expect(component.route.emit).toHaveBeenCalledWith(route);
  });
});

