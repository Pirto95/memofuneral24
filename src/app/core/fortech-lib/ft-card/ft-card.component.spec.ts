import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtCardComponent } from './ft-card.component';

describe('FtCardComponent', () => {
  let component: FtCardComponent;
  let fixture: ComponentFixture<FtCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FtCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FtCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
