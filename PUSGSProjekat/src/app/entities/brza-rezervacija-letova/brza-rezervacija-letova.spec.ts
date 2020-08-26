import {BrzaRezervacijaLetova} from './brza-rezervacija-letova';
import { TestBed } from '@angular/core/testing';
import { BrzaRezervacijaLetovaService } from 'src/app/services/brza-rezervacija-letova/brza-rezervacija-letova.service';

describe('BrzaRezervacijaLetova', () => {
    let service: BrzaRezervacijaLetovaService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service= TestBed.inject(BrzaRezervacijaLetovaService);
    });

    it('should create an instance', () => {
        expect(service).toBeTruthy();
    });
});