import { TestBed } from '@angular/core/testing';

import { RezervacijaLetovaService } from './rezervacija-letova.service';

describe('RezervacijaLetovaService', () => {
  let service: RezervacijaLetovaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RezervacijaLetovaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
