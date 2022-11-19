import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionDetailsComponent } from './prescription-details.component';

describe('PrescriptionDetailsComponent', () => {
  let component: PrescriptionDetailsComponent;
  let fixture: ComponentFixture<PrescriptionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescriptionDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrescriptionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
