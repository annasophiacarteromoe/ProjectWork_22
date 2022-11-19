import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedPrescriptionsComponent } from './saved-prescriptions.component';

describe('SavedPrescriptionsComponent', () => {
  let component: SavedPrescriptionsComponent;
  let fixture: ComponentFixture<SavedPrescriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedPrescriptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedPrescriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
