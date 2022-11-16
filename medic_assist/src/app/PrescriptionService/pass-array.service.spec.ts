import { TestBed } from '@angular/core/testing';

import { PassArrayService } from './pass-array.service';

describe('PassArrayService', () => {
  let service: PassArrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassArrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
