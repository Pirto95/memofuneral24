import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtFiltersComponent } from './ft-filters.component';

describe('FtFiltersComponent', () => {
  let component: FtFiltersComponent;
  let fixture: ComponentFixture<FtFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FtFiltersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FtFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
