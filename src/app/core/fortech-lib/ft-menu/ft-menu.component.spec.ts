import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FtMenuComponent } from './ft-menu.component';
import { MenuModule } from 'primeng/menu';
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { InfoMenu, UserMenu } from '../models';
import { ComponentRef, EventEmitter } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';

describe('FtMenuComponent', () => {
  let component: FtMenuComponent;
  let componentRef: ComponentRef<FtMenuComponent>;
  let fixture: ComponentFixture<FtMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FtMenuComponent, 
        DividerModule,
        MenuModule,
        FormsModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot(),
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FtMenuComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;

    // Imposta i segnali di input per il componente
    componentRef.setInput('dataSettingProfile', {
      name: 'Nome',
      surname: '',
      profile: {
        photoProfile: '',
        label: 'Nome'
      },
      info: { label: 'Location', location: 'loc' }
    } as UserMenu);

    componentRef.setInput('dataMenu', [
      { label: 'Menu 1', info: 'Info 1' },
      { label: 'Menu 2', info: 'Info 2' }
    ] as InfoMenu[]);

    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('dovrebbe essere creato', () => {
    expect(component).toBeTruthy();
  });

  it('dovrebbe impostare correttamente la proprietà dataSettingProfile', () => {
    const profile: UserMenu = {
      name: 'Nome',
      surname: '',
      profile: {
        photoProfile: '',
        label: 'Nome'
      },
      info: { label: 'Location', location: 'loc' }
    };
    expect(component.dataSettingProfile()).toEqual(profile);
  });

  it('dovrebbe impostare correttamente la proprietà dataMenu', () => {
    const menuItems: InfoMenu[] = [
      { label: 'Menu 1', info: 'Info 1' },
      { label: 'Menu 2', info: 'Info 2' }
    ];
    expect(component.dataMenu()).toEqual(menuItems);
  });

  it('dovrebbe emettere l\'evento close', () => {
    spyOn(component.close, 'emit');
    const event = new Event('close');
    component.closeMenu(event);
    expect(component.close.emit).toHaveBeenCalledWith(event);
  });
});