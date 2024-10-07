import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FtPanelComponent } from './ft-panel.component';
import { PanelModule } from 'primeng/panel';
import { FtMenuComponent } from '../ft-menu/ft-menu.component';
import { ComponentRef } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('FtPanelComponent', () => {
  let component: FtPanelComponent;
  let fixture: ComponentFixture<FtPanelComponent>;
  let componentRef: ComponentRef<FtPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FtPanelComponent, 
        PanelModule,
        FtMenuComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FtPanelComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;

    fixture.detectChanges();
  });

  xit('dovrebbe essere creato', () => {
    expect(component).toBeTruthy();
  });
});