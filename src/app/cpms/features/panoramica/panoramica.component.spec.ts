import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoramicaComponent } from './panoramica.component';

describe('PanoramicaComponent', () => {
  let component: PanoramicaComponent;
  let fixture: ComponentFixture<PanoramicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanoramicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanoramicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
