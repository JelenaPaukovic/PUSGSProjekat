import { TestBed } from '@angular/core/testing';

import { LetoviService } from './letovi.service';

describe('LetoviService', () => {
  let service: LetoviService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LetoviService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
