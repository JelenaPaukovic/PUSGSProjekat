import { TestBed } from '@angular/core/testing';

import { BrzaRezervacijaLetovaService } from './brza-rezervacija-letova.service';

describe('BrzaRezervacijaLetovaService', () => {
  let service: BrzaRezervacijaLetovaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrzaRezervacijaLetovaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
