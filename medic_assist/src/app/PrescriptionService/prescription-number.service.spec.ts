import { TestBed } from '@angular/core/testing';

import { PrescriptionNumberService } from './prescription-number.service';

describe('PrescriptionNumberService', () => {
  let service: PrescriptionNumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrescriptionNumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
