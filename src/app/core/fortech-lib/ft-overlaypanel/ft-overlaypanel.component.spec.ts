import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FtOverlaypanelComponent } from './ft-overlaypanel.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { OverlayPanel } from 'primeng/overlaypanel';
import { ComponentRef } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('FtOverlaypanelComponent', () => {
  let component: FtOverlaypanelComponent;
  let fixture: ComponentFixture<FtOverlaypanelComponent>;
  let componentRef: ComponentRef<FtOverlaypanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FtOverlaypanelComponent, 
        OverlayPanelModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FtOverlaypanelComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;

    fixture.detectChanges();
  });

  it('dovrebbe essere creato', () => {
    expect(component).toBeTruthy();
  });

  it('dovrebbe avere la proprietà overlayPanel definita', () => {
    expect(component.overlayPanel).toBeDefined();
  });

  it('dovrebbe chiamare il metodo toggle sull\'overlayPanel', () => {
    spyOn(component.overlayPanel, 'toggle');
    const event = new Event('click');
    component.toggle(event);
    expect(component.overlayPanel.toggle).toHaveBeenCalledWith(event);
  });

  it('dovrebbe visualizzare l\'overlay panel al click', () => {
    const event = new Event('click');
    const overlayPanelElement = fixture.debugElement.query(By.css('p-overlaypanel'));
    spyOn(component.overlayPanel, 'toggle');

    component.toggle(event);
    fixture.detectChanges();

    expect(component.overlayPanel.toggle).toHaveBeenCalledWith(event);
    expect(overlayPanelElement).toBeTruthy();
  });
});
