import { TestBed } from '@angular/core/testing';

import { FormArrayService } from './form-array.service';

describe('FormArrayService', () => {
  let service: FormArrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormArrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
