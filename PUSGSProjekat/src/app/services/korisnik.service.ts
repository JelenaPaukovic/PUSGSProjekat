import { Injectable } from '@angular/core';
import { Korisnik } from '../entities/korisnik/korisnik';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  constructor() { }

  ucitavanjeKorisnika() {
    console.log('Učitavanje korisnika...');
    return this.mockedKorisnik();
  }


  mockedKorisnik(): Array<Korisnik> {
    let allKorisnik = new Array<Korisnik>();

 

    return allKorisnik;
  }

}
