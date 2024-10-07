import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtTableComponent } from './ft-table.component';

describe('FtTableComponent', () => {
  let component: FtTableComponent;
  let fixture: ComponentFixture<FtTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FtTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FtTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
