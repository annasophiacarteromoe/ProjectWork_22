import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionsOverviewComponent } from './prescriptions-overview.component';

describe('PrescriptionsOverviewComponent', () => {
  let component: PrescriptionsOverviewComponent;
  let fixture: ComponentFixture<PrescriptionsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescriptionsOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrescriptionsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
