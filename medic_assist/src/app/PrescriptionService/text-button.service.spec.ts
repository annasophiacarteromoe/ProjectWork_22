import { TestBed } from '@angular/core/testing';

import { TextButtonService } from './text-button.service';

describe('TextButtonService', () => {
  let service: TextButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
